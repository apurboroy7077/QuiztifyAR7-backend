import saveImageAndGiveLink from "../save-image-and-give-link/saveImageAndGiveLink";

const saveAndGiveAdditionalFieldsImagesLink = (fields: any, files: any) => {
  return new Promise(async (resolve, reject) => {
    try {
      const fileKeys = Object.keys(files);
      const objectOfImageLink: any = {};
      for (let i = 0; i < fileKeys.length; i++) {
        const key = fileKeys[i];
        if (key.includes("additionalField")) {
          const file = files[key][0];
          const imageLink = await saveImageAndGiveLink(file);
          objectOfImageLink[key] = imageLink;
        }
      }
      resolve(objectOfImageLink);
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};

export default saveAndGiveAdditionalFieldsImagesLink;
