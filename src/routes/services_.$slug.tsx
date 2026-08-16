import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { getOffering, offeringsForPillar, pillars, company } from "@/data/site";
import { Button } from "@/components/ui/button";
import { PageHero, CTASection, Reveal } from "@/components/sections/Primitives";
import { absoluteUrl, jsonLdScript, pageHead } from "@/lib/seo";
import { pillarPhotos } from "@/data/media";

export const Route = createFileRoute("/services_/$slug")({
  loader: ({ params }) => {
    const offering = getOffering(params.slug);
    if (!offering) throw notFound();
    return { slug: offering.slug };
  },
  head: ({ loaderData }) => {
    const offering = loaderData ? getOffering(loaderData.slug) : undefined;
    if (!offering) {
      return { meta: [{ title: "Service unavailable" }, { name: "robots", content: "noindex" }] };
    }
    const pillar = pillars.find((p) => p.slug === offering.pillarSlug);
    const path = `/services/${offering.slug}`;
    const head = pageHead({
      title: `${offering.title} | ${pillar?.title ?? "Services"} | CyberCloud Infra LLC`,
      description: `${offering.description} SDVOSB delivery for government and enterprise.`,
      path,
    });
    return {
      ...head,
      scripts: [
        jsonLdScript({
          "@context": "https://schema.org",
          "@type": "Service",
          name: offering.title,
          description: offering.description,
          provider: {
            "@type": "Organization",
            name: company.name,
            url: absoluteUrl("/"),
          },
          serviceType: pillar?.title ?? offering.title,
          areaServed: "United States",
          url: absoluteUrl(path),
        }),
        jsonLdScript({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
            { "@type": "ListItem", position: 2, name: "Services", item: absoluteUrl("/services") },
            {
              "@type": "ListItem",
              position: 3,
              name: pillar?.title ?? "Services",
              item: absoluteUrl(pillar?.href ?? "/services"),
            },
            { "@type": "ListItem", position: 4, name: offering.title, item: absoluteUrl(path) },
          ],
        }),
      ],
    };
  },
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { slug } = Route.useLoaderData();
  const offering = getOffering(slug);
  if (!offering) throw notFound();

  const pillar = pillars.find((p) => p.slug === offering.pillarSlug);
  const pillarTo = {
    "it-services": "/it-services",
    "non-it-services": "/non-it-services",
    "infrastructure-services": "/infrastructure-services",
    "healthcare-services": "/healthcare-services",
  } as const;
  const related = offeringsForPillar(offering.pillarSlug)
    .filter((o) => o.slug !== offering.slug)
    .slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={pillar?.title ?? "Services"}
        title={offering.title}
        description={offering.description}
        breadcrumb={offering.title}
      />

      <section className="px-5 py-16 sm:px-6 lg:px-8 lg:py-[100px]">
        <div className="mx-auto grid max-w-[1200px] gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <Link
              to={pillarTo[offering.pillarSlug]}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal hover:underline"
            >
              <ArrowLeft className="h-4 w-4" />
              All {pillar?.title ?? "services"}
            </Link>
            <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              How we deliver {offering.title.toLowerCase()}
            </h2>
            {offering.body.map((p) => (
              <p key={p} className="mt-5 text-base leading-[1.75] text-muted-foreground">
                {p}
              </p>
            ))}
            <Button
              asChild
              className="mt-9 h-[52px] rounded-md bg-brand px-7 font-semibold text-brand-foreground hover:bg-brand/90"
            >
              <Link to="/get-quote">
                Request a quote <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </Reveal>

          <Reveal delay={0.08}>
            <img
              src={pillarPhotos[offering.pillarSlug].src}
              alt={pillarPhotos[offering.pillarSlug].alt}
              className="mb-6 w-full rounded-2xl object-cover shadow-card"
              width={1408}
              height={1008}
            />
            <div className="rounded-2xl border border-border bg-card p-8 shadow-card">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal">
                In this engagement
              </p>
              <ul className="mt-6 space-y-4">
                {offering.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm font-medium text-foreground"
                  >
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-surface px-5 py-16 sm:px-6 lg:px-8 lg:py-[100px]">
          <div className="mx-auto max-w-[1200px]">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal">
                Related {pillar?.title}
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground">
                Also in this pillar
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {related.map((item, i) => (
                <Reveal key={item.slug} delay={i * 0.06}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: item.slug }}
                    className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift"
                  >
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground">
                      <item.icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 text-lg font-bold text-foreground">{item.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      View service <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        title={`Talk with us about ${offering.title.toLowerCase()}`}
        description="Tell us the mission, the deadline, and the constraints. We will come back with a clear scope and staffing plan."
      />
    </>
  );
}
