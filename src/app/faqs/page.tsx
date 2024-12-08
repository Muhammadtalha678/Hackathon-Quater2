'use client'
import ThemeText from '@/components/ThemeText';
import { FiPlus} from 'react-icons/fi';

const Faqs = () => {

  const faqs = [
    { question: 'What types of chairs do you offer?', answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?' },
    { question: 'How can we get in touch with you?', answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?' },
    { question: 'Do your chairs come with a warranty?', answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?' },
    { question: 'What will be delivered? And When?', answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?' },
    { question: 'Can I try a chair before purchasing?', answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?' },
    { question: 'How do I clean and maintain my Comforty chair?', answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?' },
  ];

  return (
    <div className=" py-12 px-4 md:px-8 lg:px-16 xl:px-32">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-2xl sm:text-4xl font-bold  text-gray-800">Questions Looks Here</h1>
        <ThemeText fontWeight='font-normal' className="text-[#4F4F4F] mt-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </ThemeText>
      </div>

      {/* Faq Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqs.map((faq, index) => (
          <div
            key={index+1}
            className="bg-[#F7F7F7] p-4 rounded-lg "
          >
            {/* Ques */}
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => {}}
            >
              <h3 className="text-lg font-semibold text-gray-800">
                {faq.question}
              </h3>
              <div className="text-gray-600">
                 <FiPlus size={20} />
              </div>
            </div>

            {/* ans */}
            <p className="mt-3 text-gray-600">{faq.answer}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
