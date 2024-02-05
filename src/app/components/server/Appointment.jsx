import CheckboxComponent from "@/components/Checkbox";
import React from "react";

const Appointment = () => {
  const listOfDoctors = ["somath", "roni", "Shuvodip", "Rahul"];
  const listOfDepartment = ["Cardiology", "Neurology", "Hepatology", "Pediatrics", "Eyecare",];
  const listoftime  = ["10:00-10:30", "10:30-11:00", "11:00-10:30"];
  return (
    <section className="bg-[#f1f7fd] py-[60px] -my-[60px]" id="appoinment">
      <div className="container flex flex-col items-center justify-center gap-[30px]">
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="text-[#2c4964] text-3xl font-bold" id="title">
            <div className="mb-5">Make an Appointment</div>
            <div className="flex items-center justify-center">
              <div className="h-[1px] w-[120px] bg-[#ddd] flex items-center justify-center">
                <div className="h-[3px] w-[40px] bg-[#1977cc]"></div>
              </div>
            </div>
          </div>
          <div className="text-center">
            Book your appointment with ease. Our user-friendly system allows you
            to schedule visits with our experienced doctors at your convenience.
            We value your time and health. Start your journey towards better
            health with us today. Your wellness is just an appointment away.{" "}
          </div>
        </div>
        <form className="grid grid-cols-3 w-full gap-6">
          <input
            type="text"
            className="h-11 p-[10px] border border-[#dee2e6] text-sm text-[#212529] placeholder:text-[#212529]"
            placeholder="Your Name"
          />
          <input
            type="email"
            className="h-11 p-[10px] border border-[#dee2e6] text-sm text-[#212529] placeholder:text-[#212529]"
            placeholder="Your Email"
          />
          <input
            type="number"
            className="h-11 p-[10px] border border-[#dee2e6] text-sm text-[#212529] placeholder:text-[#212529]"
            placeholder="Your Phone"
          />
         <select className="h-11 p-[10px] border border-[#dee2e6] text-sm text-[#212529] placeholder:text-[#212529]">
          <option selected disabled>Select a time</option>
            {listoftime.map((Time, index) => {
              return (
                <option key={index} value={Time}>
                  {Time}
                </option>
              );
            })}
          </select>
          <select className="h-11 p-[10px] border border-[#dee2e6] text-sm text-[#212529] placeholder:text-[#212529]">
          <option selected disabled>Select a Department</option>
            {listOfDepartment.map((Department, index) => {
              return (
                <option key={index} value={Department}>
                  {Department}
                </option>
              );
            })}
          </select>

          <select className="h-11 p-[10px] border border-[#dee2e6] text-sm text-[#212529] placeholder:text-[#212529]">
          <option selected disabled>Select a Doctor</option>
            {listOfDoctors.map((doctors, index) => {
              return (
                <option key={index} value={doctors}>
                  {doctors}
                </option>
              );
            })}
          </select>

          <textarea
            className="col-span-3 p-[10px] border border-[#dee2e6] text-sm text-[#212529] placeholder:text-[#212529]"
            rows={5}
            placeholder="Message(Optional)"
          ></textarea>
          <CheckboxComponent text={'Book A Bed'} />
          <div className="col-span-3 flex items-center justify-center">
            <button className="bg-[#dc4797] py-3 px-8 text-white text-sm rounded-full">
              Make an Appointment
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Appointment;
