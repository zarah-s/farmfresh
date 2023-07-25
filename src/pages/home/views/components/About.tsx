import Assets from "../../../../assets";

const About = () => {
  return (
    <div className="container mx-auto px-20 mt-20">
      <div className="flex items-center justify-between">
        <img
          src={Assets.About}
          className="w-full h-[30rem] object-contain"
          alt=""
        />
        <div className="w-[calc(100%-20px)]">
          <h1 className="text-3xl font-semibold text-primary text-center">
            About
          </h1>
          <p className="text-sm my-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
            qui cum harum accusantium omnis exercitationem tenetur iste ipsam
            nulla, earum, assumenda corrupti dolor doloremque minus odit animi
            possimus. Dolorum, nemo. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Aliquam, animi? Illum vel, quas distinctio, animi
            unde ipsum temporibus nihil et ipsam, autem nobis dolorum! Accusamus
            nam facere modi at rem?
          </p>
          <div className="flex justify-center">
            <button className="bg-primary w-1/2 p-3 text-white rounded-lg ">
              Click Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
