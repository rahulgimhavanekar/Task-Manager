const convertDate = (dt) => {
  const convertedDate = new Date(dt);
  return convertedDate.toLocaleDateString([], {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  //   const time = convertedDate.toLocaleTimeString([], {
  //     hour12: true,
  //     hour: "2-digit",
  //     minute: "numeric",
  //   });

  //   return `${date} ${time}`;
};

export default convertDate;
