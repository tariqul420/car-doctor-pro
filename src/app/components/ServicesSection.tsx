import dbConnect from '@/lib/dbConnect';
import Service from '@/models/Service';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

export async function fetchServices() {
  await dbConnect();
  const services = await Service.find();
  return services;
}

export default async function ServicesSection() {
  const data = (await fetchServices()) || [];

  return (
    <div className="grid grid-cols-12 container mx-auto gap-6 my-20">
      {data.map((service) => (
        <div key={service?._id} className="col-span-4 border shadow-sm p-4 rounded-md">
          <Image className="rounded-md" src={service.img} alt={service?.img} width={314} height={208} />
          <h2 className="my-2 text-2xl font-medium">{service?.title}</h2>
          <div className="flex items-center justify-between">
            <p className="text-xl text-orange-500 font-medium">Price: ${service?.price}</p>
            <Link href={`/services/${service?._id}`}>
              <FaArrowRight />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
