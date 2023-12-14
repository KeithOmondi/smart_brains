import React from "react";

const RegisterCourse = () => {
  return (
    <>
      <div className=" mx-auto mt-8 p-8 bg-white shadow-md max-w-md">
        <h1 className="text-2xl font-bold mb-6">Course Registration Form</h1>

        <form action="#" method="post">
          <div className="mb-4">
            <label
              for="name"
              className="block text-sm font-medium text-gray-600"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Smart Brains"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="mb-4">
            <label
              for="number"
              className="block text-sm font-medium text-gray-600"
            >
              Phone Number
            </label>
            <input
              type="number"
              id="number"
              name="number"
              max={13}
              placeholder="254 724242424"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="mb-4">
            <label
              for="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="smartbrainskenya@example.com"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="mb-4">
            <label
              for="course"
              className="block text-sm font-medium text-gray-600"
            >
              Select Course
            </label>
            <select
              id="course"
              name="course"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="web-development">Web Development</option>
              <option value="data-science">Data Science</option>
              <option value="digital-marketing">Digital Marketing</option>
              <option value="data-science">Robotics</option>
              <option value="digital-marketing">Android Apps</option>
            </select>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterCourse;
