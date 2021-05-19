import { useRouter } from "next/router";
import { FC, useEffect } from "react";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { getExternalUrl } from "../../utils/helper";

interface Project {
  projectName: string;
}

const Project: FC<Project> = ({ projectName }) => {
  const router = useRouter();
  const externalUrl = getExternalUrl(projectName);

  useEffect(() => {
    if (externalUrl === "/404") {
      router.push(externalUrl, router.asPath);
    }
  });

  return (
    <>
      <Head>
        <title>Prabhat Pal | Projects</title>
      </Head>
      <div className="flex">
        <iframe
          src={externalUrl}
          className="absolute h-full w-full inset-0"
        ></iframe>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { project } = ctx.query;
  return { props: { projectName: project } };
};

export default Project;
