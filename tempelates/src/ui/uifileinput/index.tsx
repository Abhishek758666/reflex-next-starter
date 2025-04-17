import Image from "next/image";
import {
  CSSProperties,
  ChangeEvent,
  ChangeEventHandler,
  HTMLInputTypeAttribute,
  MouseEventHandler,
  useState,
} from "react";
import UIButton from "../uibutton";

interface UIFileInputProps {
  id?: string;
  label?: string;
  name?: string;
  isRequired?: boolean;
  placeholder?: string;
  style?: CSSProperties;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  error?: string;
  defaultValue?: string | number | null;
  instruction?: string;
  multiple?: boolean;
  accept?: string;
}
export default function UIFileInput({
  id,
  label,
  name,
  isRequired,
  placeholder,
  style,
  onChange,
  error,
  instruction,
  accept,
}: UIFileInputProps) {
  const [fileList, setFileList] = useState<FileList | null>(null);
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files?.length < 1) return;
    setFileList(files);
    onChange && onChange(e);
  };

  return (
    <div className="fileinput" style={style}>
      {label ? (
        <label htmlFor={id ? id : ""} className="fileinput-label">
          {label} {isRequired ? "*" : ""}
        </label>
      ) : null}

      <div className={`fileinput-input ${error ? "error" : ""}`}>
        <div className="fileinput-input--add">
          <span>
            {fileList && fileList?.length > 0
              ? fileList &&
                Object.values(fileList).map((item, index) => (
                  <div className="fileinput-input--name" key={index}>
                    <div>{item.name}</div>
                  </div>
                ))
              : placeholder}
          </span>
          <div className="fileinput-input--add_btn">
            <UIButton
              label={
                fileList && fileList.length > 0
                  ? `${fileList.length} Items Selected`
                  : "Browse Files"
              }
              type="secondary"
              style={{ fontSize: "0.7rem", height: "2rem" }}
              onClick={() => handleFileChange}
            />
          </div>
          <input
            type={"file"}
            onChange={handleFileChange}
            id={id}
            name={name}
            required={isRequired}
            accept={accept}
          />
        </div>
      </div>

      {error ? <span className="fileinput-error">{error}</span> : null}

      {instruction ? (
        <p className="fileinput-instruction">{instruction}</p>
      ) : null}
    </div>
  );
}
