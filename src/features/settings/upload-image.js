import React, { useRef, useState, useContext, useEffect } from "react";
import { Button } from "~/components/ui/button";
import { UploadIcon } from "../../../public/icons/upload";
import Image from "next/image";
import toast from "react-hot-toast";
import { GlobalContext } from "~/components/global-provider";
import { convertBase64 } from "~/utils/convertToBase64";
import { fetchWithToken } from "~/utils/fetchWithToken";
import { fetcher } from "~/utils/fetcher";
import useSWR from "swr";
import { useRouter } from "next/navigation";
export function UploadImage() {
  const inputRef = useRef();

  const router = useRouter();

  const { globalData } = useContext(GlobalContext);

  const token = globalData.token;

  const [image, setImage] = useState(null);

  const { data, isLoading, mutate } = useSWR("/account/image", (url) =>
    fetcher(url, token)
  );

  const handleUpload = async (e) => {
    if (!e.target.files) return;
    const file = e.target.files[0];

    const fileSizeMb = file.size / (1024 * 1024);

    if (fileSizeMb > 5) {
      toast.error("Размер превышает 5Мб.");
    } else {
      setImage(file);
    }
  };

  const onImageUpload = async () => {
    if (image) {
      const base64Image = await convertBase64(image);

      const result = await fetchWithToken("/account/image", "PUT", token, {
        image: base64Image,
      });

      if (result.ok) {
        toast.success("Фото успешно сохранена");

        setImage(null);

        mutate(process.env.NEXT_PUBLIC_APP_URL + "/account/image", {
          revalidate: true,
        });
      } else {
        toast.error(`${result.error.image}`);
      }
    }
  };

  const isImageUploaded = image !== null;

  return (
    <div className="flex flex-col h-withNavItems">
      <span className="text-link text-[10px] mt-9">
        <span className="underline">Главная</span>/ Настройки аккаунта /
        Загрузка аватара
      </span>
      {!isImageUploaded ? (
        <>
          <p className="text-2xl font-bold text-black mt-5">Загрузка аватара</p>
          <p className="font-sm text-[#1E1E2E] mt-9">
            Загрузите файл размером до 5Мб По формату: JPG, PNG, GIF
          </p>
          <Button
            type="blue"
            className={"mt-10"}
            onClick={() => inputRef.current.click()}
          >
            <div className="flex items-center justify-center gap-2">
              <UploadIcon />
              Выбрать файл
            </div>
          </Button>
          <input
            type="file"
            ref={inputRef}
            name="upload"
            accept="image/gif, image/png, image/jpg"
            className="hidden"
            onChange={handleUpload}
          />
        </>
      ) : (
        <>
          <p className="text-2xl font-bold text-black mt-5">
            Фото для аватарки
          </p>
          <div className="mt-9 w-full rounded-[12px] h-1/4 bg-[#F3F5F5]">
            <div className="flex justify-center w-full h-full">
              <Image
                src={URL.createObjectURL(image)}
                alt="uploaded image"
                width={200}
                height={100}
                className="rounded-full"
                objectFit="contain"
              />
            </div>
          </div>
          <div className="mt-8 space-y-3">
            <Button type="blue" onClick={onImageUpload}>
              Сохранить
            </Button>
            <Button className="text-black" onClick={() => setImage(null)}>
              Отменить
            </Button>
          </div>
        </>
      )}
      {data?.image && data?.ok && (
        <>
          <p className="text-2xl font-bold text-black mt-5">
            Загруженное фото:
          </p>
          <div className="flex justify-center mt-2">
            <Image
              src={data.image}
              width={100}
              height={100}
              alt="uploaded image"
            />
          </div>
        </>
      )}
    </div>
  );
}
