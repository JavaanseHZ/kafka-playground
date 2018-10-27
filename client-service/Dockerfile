FROM microsoft/dotnet:2.1-aspnetcore-runtime AS base
WORKDIR /app
EXPOSE 5000

FROM microsoft/dotnet:2.1-sdk AS build
WORKDIR /src
COPY ["client-service.csproj", "./"]
RUN dotnet restore "./client-service.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet build "client-service.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "client-service.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "client-service.dll"]
