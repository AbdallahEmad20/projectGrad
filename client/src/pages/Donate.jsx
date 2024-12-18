import donatePic from "../assets/donate.jpg";
import { FaHandHoldingHeart } from "react-icons/fa6";
import { FaTreeCity, FaMapLocation } from "react-icons/fa6";
import { FaStreetView, FaRegIdCard } from "react-icons/fa";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload, Input } from "antd";
import { useEffect } from "react";
const { Dragger } = Upload;
const Donate = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const props = {
    name: "file",
    multiple: true,
    action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  return (
    <div className="bg-main w-full min-h-screen text-white">
      <div className="relative flex flex-col items-center justify-center mb-10">
        <img
          src={donatePic}
          className="w-full h-[250px] bg-center object-cover"
          alt="donatePic"
        />
        <div className="w-full h-[250px] absolute bg-black top-0 opacity-30"></div>
        <div className="z-10 -mt-32">
          <h4 className="text-center text-lg md:text-2xl font-semibold">
            Donate the food <br /> you don t need to help others <br /> and make
            a difference.
          </h4>
        </div>
      </div>
      <div className="py-10 px-5 md:px-52 flex flex-col items-center justify-center">
        <h3 className="border-b w-full text-center py-3">
          Share the food you don’t need to benefit someone in need.
        </h3>
        <form className="py-5 w-full flex flex-col gap-5">
          <div className="flex items-center gap-5 capitalize w-full">
            <FaHandHoldingHeart size={30} />
            <p>Donation Details</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="city" className="capitalize">
                city:
              </label>
              <Input
                id="city"
                size="large"
                placeholder="Enter your City"
                prefix={<FaTreeCity />}
                className="p-3 outline-none border-main hover:border-main"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="street" className="capitalize">
                street:
              </label>
              <Input
                id="street"
                size="large"
                placeholder="Enter your street"
                prefix={<FaStreetView />}
                className="p-3 outline-none border-main hover:border-main"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="National" className="capitalize">
                National ID :
              </label>
              <Input
                id="National"
                size="large"
                placeholder="Enter your National ID"
                prefix={<FaRegIdCard />}
                className="p-3 outline-none border-main hover:border-main"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="Location G-Map" className="capitalize">
                Location G-Map:
              </label>
              <Input
                id="Location G-Map"
                size="large"
                placeholder="Enter your Location G-Map Link"
                prefix={<FaMapLocation />}
                className="p-3 outline-none border-main hover:border-main"
              />
            </div>
          </div>
          <Dragger {...props} className="bg-white rounded">
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload. Strictly prohibited from
              uploading company data or other banned files.
            </p>
          </Dragger>
          <div className="flex flex-col gap-2">
            <label htmlFor="details" className="capitalize">
              details:
            </label>
          </div>
          <textarea
            name="details"
            id="details"
            className="rounded"
            rows={5}
          ></textarea>
          <button className="bg-white text-main font-bold p-2 rounded capitalize hover:bg-slate-200 duration-300">
            send request
          </button>
        </form>
      </div>
    </div>
  );
};

export default Donate;
