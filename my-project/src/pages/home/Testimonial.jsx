import React from "react";
import {} from "react-icons";

const Testimonial = () => {
  return (
    <div className="section-container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2">
          <img src="\images\home\testimonials\testimonials.png" />
        </div>
        <div className="md:w-1/2">
          <div className="text-left">
            <p className="subtitle">Customers Favourites</p>
            <h3 className="title">Popular Catogories</h3>
            <blockquote className="my-5 text-secondary leading-[30px]">
              "i had the pleasure of dining at foodie last night ,and I'm still
              having about the experience! thee attention to detail in
              presentation and service was impaccableF"
            </blockquote>
            <div className="flex item-center gap-4 flex-wrap">
              <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                <div className="avatar">
                  <div className="w-12">
                    <img src="\images\home\testimonials\testimonial1.png" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src="\images\home\testimonials\testimonial2.png" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src="\images\home\testimonials\testimonial3.png" />
                  </div>
                </div>
                <div className="avatar placeholder">
                  <div className="w-12 bg-neutral text-neutral-content">
                    <span>+99</span>
                  </div>
                </div>
              </div>
              <div className="space-y-1 ">
                <h5 className="text-lg font-semibold">Customer Feedback</h5>
                <faStar className="text-yellow-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
