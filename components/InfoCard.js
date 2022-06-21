import Image from 'next/image';

function InfoCard({ img, location, title, description, star, price, total }) {
  return (
    <div>
      {/* <div className="relastive h-24 w-40 md:h-52 md:w-80 flex-shring-0">
        <Image src={img} layout="fill" objectFit="cover" />
      </div> */}
      <div>
        <div>
          <p>{location}</p>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
