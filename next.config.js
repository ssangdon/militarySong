module.exports = {
    async rewrites() {
        return [
        //   {
        //     source: '/songs',
        //     destination: 'http://localhost:5000/songs',
        //   },
        //   {
        //       source: '/api/data',
        //       destination:"http://localhost:5000/api/data",
        //   },
          {
              source:'/songs',
              destination:'https://milback.herokuapp.com/songs',
          }
        ]
      }
  };