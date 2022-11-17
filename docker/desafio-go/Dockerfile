FROM golang:1.19-alpine AS builder

WORKDIR /usr/src/app

COPY go.* ./
COPY *.go ./

RUN go build -o /desafio-go

######## multi stage

FROM scratch
COPY --from=builder /desafio-go /desafio-go

CMD ["/desafio-go"]