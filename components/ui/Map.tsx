const Map = () => {
  return (
    <>
      <div className="map-container w-[100%]">
        <iframe
          title="Mapa de ubicación en Barcelona, España"
          width="100%"
          height="500"
          src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=es&amp;q=Les%20Rambles,%201%20Barcelona,%20Spain+(Mi%20nombre%20de%20egocios)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </>
  );
};

export default Map;
