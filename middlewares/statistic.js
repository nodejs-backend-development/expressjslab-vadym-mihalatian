const collectStatistics = (req, res, next) => {
    const { params, query } = req;
    const statistics = {
      pathVariables: { ...params },
      queryString: { ...query },
    };
  
    console.log(statistics);
  
    next();
  };
  
 module.exports = collectStatistics;
  