---
title: Docker Compose
description: Everything about the included Docker Compose File.
---

Here is how to use the included Docker Compose file to spin up the `Full Stack Hero .NET Starter Kit` instance on your development machine.
You can find the related compose files under the `./compose` folder at the root of the repository.

## Goal

The `./compose` folder contains all docker images needed, startup scripts and instructions to deploy `Full Stack Hero .NET Starter Kit` apps & create the infraestructure responsable for monitoring the applications and the system resources (CPU, MEM, Disk, Network, Process and more) from hosted server.

## Features

- [x] Deploy FSH Apps.
- [x] Centralized Logs using Grafana Loki.
- [x] Unified Metrics using the latest ASP.NET Net8 Standard.
- [x] Open Telemetry Complain: Logs, Traces & Metrics using otel exporters and prometheus
- [x] Monitoring System Resources using node-exporter for linux.
- [x] Visualizing Dashboard for ASP.NET Core Apps OTEL Metrics & Monitoring Resources using Grafana.
- [x] Alerts Notifications using integration with Grafana (SOON)
- [x] Jaeger - Tracing Visualizer 
- [x] Portainer - Docker & Container Manager (SOON) 

## Environment

| Site                | Port  |  Url                                  | Default Credentials        |
| --------------------|:------| -------------------------------------:|:---------------------------|
| Blazor              | 7000  | http://localhost:7000/                |                            |
| WebApi              | 5000  | http://localhost:5000/                |                            |
| PostgreSQL          | 5433  | http://localhost:5433/                | pgadmin/pgadmin            |
| Grafana             | 3000  | http://localhost:3000/                | admin/admin                | 
| Grafana Loki        | 3100  | http://localhost:3100/                |                            |
| Prometheus          | 9090  | http://localhost:9090/                |                            |
| Portainer           | 9010  | http://localhost:9010/                |                            |
| Jaeger              | 16686 | http://localhost:16686/search         |                            |
| Otel Exporter       | 4317  | http://localhost:4317/                |                            |


