import dbConnect from '@/lib/dbConnect';
import Service from '@/models/Service';
import Image from 'next/image';

interface ServiceDetailsProps {
  params: { id: string };
}

interface serviceDocument {
  _id: string;
  service_id: string;
  title: string;
  img: string;
  price: string;
  description: string;
  facility: {
    name: string;
    details: string;
  }[];
}

export default async function ServiceDetails({ params }: ServiceDetailsProps) {
  const { id } = await params;

  await dbConnect();
  const data = ((await Service.findById(id)) as serviceDocument) || {};

  return (
    <div className="w-10/12 mx-auto">
      <div>
        <Image src={data?.img} width={500} height={400} alt={data?.title} />
      </div>
      <div className="mt-4 space-y-1">
        <div className="flex justify-between">
          <h1 className="text-3xl font-semibold">{data?.title}</h1>
          <p className="text-orange-500 text-xl font-bold">${data?.price}</p>
        </div>
        <p>{data?.description}</p>

        {data?.facility.map((facility, index) => (
          <div key={index}>
            <h2 className="font-bold text-lg">{facility?.name}</h2>
            <p>{facility?.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
