import { services, capabilities, type Service, type ServiceSlug } from "@/content/site";

/**
 * Look up a service category by slug. Returns null if the slug isn't valid.
 */
export function getServiceBySlug(slug: string): Service | null {
  return services.find((s) => s.slug === slug) ?? null;
}

/**
 * Get the capability postures that most commonly cover a given service.
 * Returns the full capability objects, not just slugs.
 */
export function getPosturesForService(
  service: Service,
): Array<(typeof capabilities)[number]> {
  return capabilities.filter((c) =>
    (service.postures as readonly string[]).includes(c.slug),
  );
}

/**
 * All service slugs — used for generateStaticParams in the dynamic route.
 */
export function getAllServiceSlugs(): ServiceSlug[] {
  return services.map((s) => s.slug);
}
