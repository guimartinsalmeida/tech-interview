
export const filterAdData = (data, startDate, endDate, campaignType, segment) => {
  return data.filter((anuncio) => {
    const isWithinDateRange = new Date(anuncio.fecha) >= new Date(startDate) && new Date(anuncio.fecha) <= new Date(endDate);
    const isCampaignTypeMatch = campaignType ? anuncio.tipoCampaña === campaignType : true;
    const isSegmentMatch = segment ? anuncio.segmentación === segment : true;

    return isWithinDateRange && isCampaignTypeMatch && isSegmentMatch;
  });
};

export const filterAnalyticsData = (data, startDate, endDate) => {
  const filteredViews = data.vistasPagina.filter(view => new Date(view.fecha) >= new Date(startDate) && new Date(view.fecha) <= new Date(endDate));
  const filteredSessions = data.sesiones.filter(session => new Date(session.fecha) >= new Date(startDate) && new Date(session.fecha) <= new Date(endDate));

  return {
    vistasPagina: filteredViews,
    sesiones: filteredSessions,
    demografia: data.demografia
  };
};
