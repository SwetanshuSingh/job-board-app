import JobListItem from "@/components/JobListItem";
import { prisma } from "@/lib/db";

export default async function Home() {
  const jobs = await prisma.job.findMany({
    where: {
      approved: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="max-w-5xl m-auto px-3 my-10 space-y-10">
      <div>
        {/* Make Navbar here */}
      </div>
      
      <section>
        <div className="space-y-4">
          {jobs.map((job) => {
            return <JobListItem key={job.id} job={job} />;
          })}
        </div>
      </section>
    </main>
  );
}
