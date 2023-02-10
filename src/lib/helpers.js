export const getStringedDate = (startDate, endDate) => {
  console.log(startDate);
  return `${startDate.getFullYear()}-${
    startDate.getMonth() + 1
  }-${startDate.getDate()} ${endDate.getFullYear()}-${
    endDate.getMonth() + 1
  }-${endDate.getDate()}`;
};

export const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
            resolve(fileReader.result);
        };

        fileReader.onerror = (error) => {
            reject(error);
        };
    });
};