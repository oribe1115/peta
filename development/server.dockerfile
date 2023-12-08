FROM golang:1.21.5-bullseye

WORKDIR /air
COPY development/.air.toml .

WORKDIR /github.com/oribe1115/peta

RUN go install github.com/cosmtrek/air@latest
COPY server/go.mod server/go.sum .
RUN go mod download
