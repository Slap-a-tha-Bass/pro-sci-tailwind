import CallToAction from "../../components/callToAction";

export default function About() {
  return (
    <main className="bg-white container mx-auto flex flex-col">
      <div className="max-w-xl m-auto py-4 px-8">
        <h3 className="font-bold text-center">About</h3>
        <p className="pt-8">
          The Pro-SCI Lab at Ohio University studies the pathophysiology of
          traumatic spinal cord injury (SCI) in the acute and chronic stages,
          with the purpose of developing novel nutritional and rehabilitation
          strategies to improve neurorecovery, metabolic function, and
          microbiome composition. We do this by addressing exciting questions
          like:
        </p>
        <ul className="list-disc list-inside">
          <li className="mt-2">
            Can the ketogenic diet improve neurorecovery by decreasing
            neuroinflammation in the acute stages of SCI?
          </li>
          <li className="mt-2">
            How does a low-carbohydrate/high-protein diet impact insulin
            sensitivity, glucose tolerance, and muscle signaling for glucose
            utilization in the chronic stages of SCI?
          </li>
          <li className="mt-2">
            Can neuromuscular electrical stimulation help maintain healthy
            skeletal muscle size and fiber phenotype (homogenous distribution of
            Type I, IIa, and IIx fibers) early after SCI?
          </li>
          <li className="mt-2">
            How does SCI-induced distorted gut microbiome composition impact
            metabolic and bowel health outcomes after SCI?
          </li>
          <li className="mt-2">
            Can we identify therapeutic targets such as diet, probiotics,
            prebiotics, synbiotics, or fecal microbiome transplants to prevent
            secondary health complications of SCI?
          </li>
        </ul>
        <p className="pt-4">
          We integrate SCI demographics, clinical and experimental data,
          metagenomics, and metabolomics into a comprehensive database to
          facilitate more complete health pictures, thus allowing the best
          treatment and prevention strategies for the acute and chronic stages
          of SCI.
        </p>
        <p className="pt-4">
          This kind of work is impactful and fun and all possible because of our
          diverse group of scientists (with backgrounds in neuroscience,
          rehabilitation, nutrition, skeletal muscle biology, metabolism,
          exercise science, microbiology, and biostatistics) working together.
          We inspire each other by freely sharing our data, expertise, and, most
          importantly, ideas.
        </p>
        <p className="pt-4">
          Dr. Yarar-Fisher is the principal investigator of the Pro-SCI Lab. She
          strives to ensure that all mentees, including under-represented racial
          and ethnic minorities and international students, feel supported in
          their quest for a satisfying and successful career and confident in
          their skills and contributions. Her mentoring style is
          empowerment-oriented, culturally sensitive, and excellence-driven. She
          aims to provide unconditional supportive mentoring, whether her
          trainees want to become researchers like her. She encourages their
          independence by introducing them to many resources to help them thrive
          independently when she is not around. She encourages them to take an
          active role in designing, planning, and executing experiments and
          interpreting results. By the end of the training, her trainees can
          design, execute, troubleshoot the experiments, and interpret the
          findings.
        </p>
        <p className="pt-4">
          She has intentionally created a space within her laboratory that
          harnesses their collective interests to build a strong team with a
          common goal of contributing discoveries in SCI and improving the
          quality of life for those impacted by the injury while recognizing and
          celebrating their diverse backgrounds and identities. Pro-SCI lab
          members believe science works best to produce novel insights when
          influenced by diverse ideas from individuals working together.
        </p>
        <p className="pt-4">
          We are located in the fantastic city of Columbus, OH (Go Buckeyes!)
          with innovative arts scenes and booming tech industry.
        </p>
        <p className="pt-4">
          Until a few months ago, we were located at Birmingham, AL (Magic
          City!), only place in the world where all three raw ingredients for
          steel (coal, limestone, and iron ore) occur naturally within a
          ten-mile radius.
        </p>
      </div>
      <CallToAction marginTop="mt-8" marginBottom="mb-8" />
    </main>
  );
}
