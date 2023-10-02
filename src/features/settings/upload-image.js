import React, { useRef, useState } from "react";
import { Button } from "~/components/ui/button";
import { UploadIcon } from "../../../public/icons/upload";
import Image from "next/image";

export function UploadImage() {
  const inputRef = useRef();

  const [image, setImage] = useState(null);

  const handleUpload = async (e) => {
    if (!e.target.files) return;
    const file = e.target.files[0];

    setImage(file);
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
            <Button type="blue">Сохранить</Button>
            <Button className="text-black" onClick={() => setImage(null)}>
              Отменить
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
