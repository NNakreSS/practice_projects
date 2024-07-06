import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Contact = () => {
  const { char_id } = useParams();
  const [char, setChar] = useState(null);

  useEffect(() => {
    axios(
      `${import.meta.env.VITE_API_BASE_ENDPOINT}/character/${char_id}`
    ).then(({ data }) => {
      console.log(data);
      setChar(data);
    });
  }, [char_id]);

  return (
    char && (
      <div className="flex items-center justify-center w-screen h-screen">
        <Card className="py-4 w-2/6 flex items-center">
          <CardHeader className="pb-0 pt-2 px-4 flex-col flex gap-2 justify-start">
            <h2 className="text-tiny uppercase font-bold">{char.name}</h2>
            <div className="text-default-500">Species: {char.species}</div>
            <div className="text-default-500">Gender : {char.gender}</div>
            <div className="text-default-500">Status : {char.status}</div>
          </CardHeader>
          <CardBody className="overflow-visible py-2 flex items-center">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={char.image}
              width={270}
            />
          </CardBody>
        </Card>
      </div>
    )
  );
};

export default Contact;
