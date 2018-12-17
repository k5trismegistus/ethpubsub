module.exports = {
    networks: {
      live: {
        host: "localhost",
        port: 8545, // ポートを指定してganache-cliを起動した場合は適宜修正してください
        network_id: "*"
      }
    }
  };