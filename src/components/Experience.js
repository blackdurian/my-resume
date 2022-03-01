import { Company } from "./Company";
import { BASE_URL } from "../constant";

export const Experience = () => {
  return (
    <>
      <h5>Experience</h5>
      <Company
        website="https://www.crimsonlogic.com/"
        icon={`${BASE_URL}/company-icon/crimsomlogic.jpg`}
        jobTitle="Software Engineer"
        name="CrimsonLogic Pte Ltd"
        jobLevel="Internship"
        periodStr="Dec 2020 - Apr 2021 · 4 mos"
        description={`- Be part of Coherence Data Exchange Platform (DXP) product team to build a product that publisher can publish Datasets and made available for users to subscribe. \n- Contributed on bug fixes, features development, automation test, and function research.`}
      />
      <Company
        website="https://yonyou.com.my/"
        icon={`${BASE_URL}/company-icon/yonyou.jpg`}
        jobTitle="Assistant Developer"
        name="Yonyou (Malaysia) Sdn Bhd"
        jobLevel="Internship"
        periodStr="Dec 2019 - Feb 2020 · 3 mos"
        description={`- Implement and integrate ERP system to client server.\n- Provided support in software deployment in maintenance phase, the service includes fixing bugs, resolving queries, form design, product demonstration.`}
      />
      <Company
        website="https://www.dieboldnixdorf.com/"
        icon={`${BASE_URL}/company-icon/dieboldnixdorf.jpg`}
        jobTitle="Quality Assurance Tester"
        name="Diebold Nixdorf (Malaysia) Sdn Bhd"
        jobLevel="Internship"
        periodStr="Sep 2019 - Dec 2019 · 3 mos"
        description={`Developing test cases and verification of the test environment based on project's requirements was done on daily basis. It included designing and executing test scripts.`}
      />
    </>
  );
};
