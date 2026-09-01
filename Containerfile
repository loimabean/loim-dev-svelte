FROM node:26-alpine AS builder
WORKDIR /app
RUN mkdir /data
RUN npm install -g --force corepack
RUN corepack enable pnpm
# for better-sqlite3's node-gyp
RUN apk update
RUN apk add python3 make

COPY . .
RUN pnpm install --frozen-lockfile
RUN pnpm run build



FROM node:26-alpine AS runner
WORKDIR /app
RUN mkdir /data
RUN npm install -g --force corepack
RUN corepack enable pnpm
# for better-sqlite3's node-gyp
RUN apk update
RUN apk add python3 make

COPY --from=builder /app/build ./build
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=builder /app/pnpm-workspace.yaml ./pnpm-workspace.yaml

RUN pnpm install --prod --frozen-lockfile

EXPOSE 3000
CMD ["node", "build"]
