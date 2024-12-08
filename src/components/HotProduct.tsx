import Image from "next/image";
import Prod3 from '../../public/product3.png';
import Prod4 from '../../public/product4.png';
import Prod15 from '../../public/product5.png';
import prod7 from '../../public/product7.png';

export default function HotProduct() {
  return (
    <header className="  ">
      <div className="relative grid grid-cols-1 md:grid-cols-[auto_1fr] gap-2 items-center">
        {/* Vertical text */}
        <div
          className="writing-mode-vertical hidden text-xl font-medium tracking-wider text-zinc-900 md:block pt-6"
          style={{
            writingMode: 'vertical-rl',
            textOrientation: 'revert',
            transform: 'rotate(180deg)', // Rotates the text so it reads bottom-to-top
          }}
        >
          EXPLORE NEW AND POPULAR STYLES
        </div>

        {/* Images section */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Orange chair (left side) */}
          <div className="w-full md:w-[48%]">
            <Image
              src={Prod3}
              alt="Orange modern chair"
              className="h-full w-full object-cover"
              width={500}
              height={500}
              priority
            />
          </div>

          {/* Other chairs (right side) */}
          <div className="grid grid-cols-2 gap-4 w-full md:w-[60%] lg:w-[48%]">
            <div className="aspect-square">
              <Image
                src={Prod4}
                alt="White tufted chair"
                className="h-full w-full object-cover"
                width={500}
                height={500}
              />
            </div>
            <div className="aspect-square">
              <Image
                src={Prod15}
                alt="Gray upholstered chair"
                className="h-full w-full object-cover"
                width={500}
                height={500}
              />
            </div>
            <div className="aspect-square">
              <Image
                src={prod7}
                alt="Vintage white chair"
                className="h-full w-full object-cover"
                width={500}
                height={500}
              />
            </div>
            <div className="aspect-square">
              <Image
                src={Prod15}
                alt="Vintage white chair duplicate"
                className="h-full w-full object-cover"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
