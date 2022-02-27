import React, { FC } from "react";
import { parseFile } from "../scripts/parseFile";

type SelectFileEventHandler = (
  event: React.ChangeEvent<HTMLInputElement>
) => void;

const FileUpload: FC = () => {
  const onFileChange: SelectFileEventHandler = async (event) => {
      const files = event.currentTarget?.files;
      console.log(files);
    if (files && files.length > 0) {
      try {
        const content = await readFileContent(files[0]);
        const charactersInStringMatrix = await parseFile(content);
        // const accountNumbers = getValidAccountNumbers(charactersInStringMatrix);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("No file found");
    }
  };

  function readFileContent(file: File): Promise<string> {
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
      reader.onload = (event) => {
        const content = event?.target?.result;
        if (typeof content === "string") {
          resolve(content);
        } else {
          reject("Content of the file is not type string.");
        }
      };
      reader.onerror = (error) => reject(error);
      reader.readAsText(file);
    });
  }

  return (
    <main>
      <div>
        <label htmlFor="file-upload">Select a txt file to parse</label>
      </div>
      <div>
        <input
          type="file"
          id="file-upload"
          name="filer"
          accept=".txt"
          onChange={onFileChange}
        />
      </div>
    </main>
  );
};

export default FileUpload;
