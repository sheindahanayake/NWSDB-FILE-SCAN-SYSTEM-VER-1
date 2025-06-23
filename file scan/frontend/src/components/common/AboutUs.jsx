import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gray-900 py-16">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section: Detailed Information */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-100 mb-4">
            Central Regional Support Center (RSC) Details
          </h2>
          <div className="flex justify-center items-start">
            <img src="/src/assets/images/RSC.jpg" alt="RSC Details" className="w-1/4 h-auto mr-12 rounded-lg" />
            <div className="text-left">
              <p className="text-gray-300 text-justify">
                The Central Regional Support Center (RSC), operational since 1987, is one of the pioneering centers
                established following the National Water Supply and Drainage Board’s (NWSDB) decision to decentralize its operations.
                The center is led by a Deputy General Manager (DGM), supported by two Assistant General Managers: AGM (Development)
                and AGM (Operation & Maintenance).
              </p>
              <p className="text-gray-300 mt-4 text-justify">
                Central RSC oversees four regions: Central South, Central North, Central East, and Matale. The Operation and Maintenance
                (O&M) of water supply schemes, a core function of the RSC, is managed by the respective Regional Managers. Additionally,
                the RSC is responsible for the O&M of the sewerage system in the Kandy Hantana area and the Kandy City Wastewater Treatment
                Plants, under the direct supervision of the Deputy General Manager (Central).
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

                <h3 className="text-2xl font-semibold text-gray-100 mb-4">Key Functions of the Central RSC</h3>
                <ul className="text-gray-300 list-disc list-inside text-justify w-2/3">
              <li>Planning and design of small- and medium-scale projects.</li>
              <li>Planning activities for large-scale projects.</li>
              <li>Rehabilitation and augmentation of existing systems.</li>
              <li>Billing and revenue collection for services provided.</li>
            </ul>
                
              </p>




            </div>
          </div>
        </div>

      

        {/* Organizational Structure */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold text-gray-100 mb-4">Organizational Structure</h3>
          <p className="text-gray-300 mx-auto text-justify">
            The Central RSC’s operations are monitored and supervised by the Additional General Manager (C/NW/Sab.), based at the
            Sewerage Treatment Plant office in Gatambe, Kandy. However, day-to-day management lies with the DGM, supported by a
            structured hierarchy of managers.
          </p>
          <p className="text-gray-300 mx-auto mt-4 text-justify">
            The center’s organizational units mirror the divisions found in the NWSDB head office, with their operational capacity
            depending on the extent of decentralization. Additionally, the Central RSC provides support services to other RSCs upon
            request, with such requests coordinated by the Additional General Manager (C/NW/Sab.). This cooperative approach highlights
            the Central RSC’s pivotal role in the broader NWSDB network.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;