FROM node:25-slim AS builder
RUN npm install -g --force corepack
RUN corepack enable pnpm
WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm run build



FROM node:25-slim AS runner
RUN npm install -g --force corepack
RUN corepack enable pnpm
WORKDIR /app

COPY --from=builder /app/build ./build
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/pnpm-lock.yaml ./pnpm-lock.yaml

RUN pnpm install --prod --frozen-lockfile

EXPOSE 3000
CMD ["node", "build/index.js"]
