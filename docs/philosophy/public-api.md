# Public API

The platform's features are designed to be accessible both from the official interface and from third-party applications. The objective is simple: allow everyone to create their own FairPlay experience, whether it's a mobile client, a TV, or a fridge (I mean, why not).

## Current Status of API v2

The TypeScript API v2 is still under development, but should be deployed soon!

The next steps are mostly some refactor on the code side (the contracts won't change), and polish.

## Backend documentation

The backend exposes the Swagger UI at `/docs` and the OpenAPI specification at `/openapi.json`. For the public instance:
- [Swagger UI](https://apiv2.fairplayvideo.org/docs)
- [OpenAPI JSON](https://apiv2.fairplayvideo.org/openapi.json)

The specification is compiled at startup from the route registers and Zod schemas. It documents the parameters, validations, response codes, errors, and examples.

## SDK Generation

The OpenAPI specification can be used as input for client generators in TypeScript, Python, Kotlin, Swift, Go, C#, and other languages. We do not _yet_ publish ready to use official SDKs in this documentation.

## An Open Platform

We don't want to impose a single official client. The goal remains to allow the community to build its own tools and interfaces.