import React from "react";
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const districts = [
  {
    name: "Moyo",
    lat: 3.6609,
    lng: 31.7247,
    impacts: [
      "U Decide MOA—SRHR",
      "WAY - Women Adolescents and Young People –SRHR",
    ],
  },
  {
    name: "Obongi",
    lat: 3.2418,
    lng: 31.5519,
    impacts: [
      "U Decide MOA—SRHR",
      "WAY - Women Adolescents and Young People –SRHR",
    ],
  },
  {
    name: "Adjumani",
    lat: 3.3779,
    lng: 31.7906,
    impacts: [
      "U Decide MOA—SRHR",
      "WAY - Women Adolescents and Young People –SRHR",
      "My Choice - Catalytic Opportunity Fund–SRHR",
    ],
  },
  {
    name: "Kasese",
    lat: 0.1867,
    lng: 30.0881,
    impacts: [
      "U Decide Kasese Buyangabu–SRHR",
      "My Choice - Catalytic Opportunity Fund–SRHR",
    ],
  },
  {
    name: "Bunyangabu",
    lat: 0.4871,
    lng: 30.2051,
    impacts: [
      "U Decide Kasese Buyangabu–SRHR",
      "My Choice - Catalytic Opportunity Fund–SRHR",
    ],
  },
  {
    name: "Kagadi",
    lat: 0.9411,
    lng: 30.8108,
    impacts: [
      "Reducing High Fertility Rates and Improving Sexual Reproductive Health Outcomes (RISE)–SRHR",
      "My Choice - Catalytic Opportunity Fund–SRHR",
    ],
  },
  {
    name: "Yumbe",
    lat: 3.459,
    lng: 31.2403,
    impacts: [
      "Reducing High Fertility Rates and Improving Sexual Reproductive Health Outcomes (RISE)–SRHR",
      "WAY - Women Adolescents and Young People –SRHR",
    ],
  },
  {
    name: "Kampala",
    lat: 0.3476,
    lng: 32.5825,
    impacts: [
      "Menplus II–SRHR",
      "Lydia Community Representatives Project —SRHR",
      "LCA–SRHR",
    ],
  },
  {
    name: "Bushenyi",
    lat: -0.5417,
    lng: 30.1878,
    impacts: ["Menplus II–SRHR"],
  },
  {
    name: "Mbarara",
    lat: -0.6072,
    lng: 30.6545,
    impacts: [
      "Menplus II–SRHR",
      "I AM For a Better life -SRHR",
      "My Choice - Catalytic Opportunity Fund–SRHR",
      "Reach a Hand Uganda Community Clinic —SRHR",
    ],
  },
  {
    name: "Rwampara",
    lat: -0.7167,
    lng: 30.5167,
    impacts: [
      "Menplus II–SRHR",
      "Youth Connect–SRHR",
      "I AM For a Better life -SRHR",
      "My Choice - Catalytic Opportunity Fund–SRHR",
      "Reach a Hand Uganda Community Clinic —SRHR",
    ],
  },
  {
    name: "Lira",
    lat: 2.249,
    lng: 32.8998,
    impacts: ["Menplus II–SRHR"],
  },
  {
    name: "Soroti",
    lat: 1.7167,
    lng: 33.6111,
    impacts: ["Menplus II–SRHR"],
  },
  {
    name: "Bugamba",
    lat: -0.7167,
    lng: 30.5167,
    impacts: ["Youth Connect–SRHR"],
  },
  {
    name: "Isingiro",
    lat: -0.8333,
    lng: 31.0,
    impacts: [
      "I AM For a Better life -SRHR",
      "My Choice - Catalytic Opportunity Fund–SRHR",
      "Reach a Hand Uganda Community Clinic —SRHR",
    ],
  },
  {
    name: "Agago",
    lat: 2.85,
    lng: 33.3333,
    impacts: ["WAY - Women Adolescents and Young People –SRHR"],
  },
  {
    name: "Amuru",
    lat: 2.9667,
    lng: 31.95,
    impacts: ["WAY - Women Adolescents and Young People –SRHR"],
  },
  {
    name: "Arua",
    lat: 3.0201,
    lng: 30.9111,
    impacts: [
      "Menplus II–SRHR",
      "WAY - Women Adolescents and Young People –SRHR",
      "My Choice - Catalytic Opportunity Fund–SRHR",
    ],
  },
  {
    name: "Kitgum",
    lat: 3.3,
    lng: 32.8667,
    impacts: ["WAY - Women Adolescents and Young People –SRHR"],
  },
  {
    name: "Lamwo",
    lat: 3.5333,
    lng: 32.8,
    impacts: ["WAY - Women Adolescents and Young People –SRHR"],
  },
  {
    name: "Madi-Okollo",
    lat: 2.5,
    lng: 30.9,
    impacts: [
      "WAY - Women Adolescents and Young People –SRHR",
      "My Choice - Catalytic Opportunity Fund–SRHR",
    ],
  },
  {
    name: "Terego",
    lat: 3.0333,
    lng: 30.9333,
    impacts: ["WAY - Women Adolescents and Young People –SRHR"],
  },
  {
    name: "Hoima",
    lat: 1.4356,
    lng: 31.3436,
    impacts: [
      "PROMISE II-SRHR for Marginalised Young people–SRHR",
      "My Choice - Catalytic Opportunity Fund–SRHR",
    ],
  },
  {
    name: "Wakiso",
    lat: 0.4044,
    lng: 32.4594,
    impacts: ["Lydia Community Representatives Project —SRHR"],
  },
  {
    name: "Mukono",
    lat: 0.3533,
    lng: 32.7553,
    impacts: ["Lydia Community Representatives Project —SRHR"],
  },
  {
    name: "Ibanda",
    lat: -0.1333,
    lng: 30.5,
    impacts: ["Reach a Hand Uganda Community Clinic —SRHR"],
  },
  {
    name: "Kiruhura",
    lat: -0.2,
    lng: 30.8,
    impacts: ["Reach a Hand Uganda Community Clinic —SRHR"],
  },
  {
    name: "Sheema",
    lat: -0.55,
    lng: 30.4,
    impacts: ["Reach a Hand Uganda Community Clinic —SRHR"],
  },
  {
    name: "Makindye",
    lat: 0.2833,
    lng: 32.5833,
    impacts: ["LCA–SRHR"],
  },
];

const Section6 = () => {
  // Define Uganda's bounds
  const ugandaBounds = [
    [4.2, 29.5], // Southwest coordinates
    [-1.5, 30.0], // Northeast coordinates
  ];

  return (
    <div className="map-page flex flex-col lg:flex-row">
      {/* Left info section */}
      <div className="info-panel overflow-y-auto pr-4 lg:w-1/2">
        <div className="floating-words font-procerus">Reach A Hand Uganda</div>
        <h6 className="poppinsBold uppercase text-3xl mb-2">
          Impact Overview (2019 - 2023)
        </h6>

        {/* 2022 Impact Table */}
        <h4 className="text-xl font-bold mt-4">2022</h4>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse font-kinetika text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-4 py-2 garnetFont text-black text-left">
                  Metric
                </th>
                <th className="border px-4 py-2 garnetFont text-black text-left">
                  Value
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2 font-semibold">
                  SRHR Information
                </td>
                <td className="border px-4 py-2">
                  231,912 people (77,640 Males, 154,272 Females)
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-semibold">
                  Unintended Pregnancies Averted
                </td>
                <td className="border px-4 py-2">17,438</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-semibold">
                  Live Births Averted
                </td>
                <td className="border px-4 py-2">9,742</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-semibold">
                  Abortions Averted
                </td>
                <td className="border px-4 py-2">5,139</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-semibold">
                  Maternal Deaths Averted
                </td>
                <td className="border px-4 py-2">29</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-semibold">
                  Child Deaths Averted
                </td>
                <td className="border px-4 py-2">413</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-semibold">
                  Unsafe Abortions Averted
                </td>
                <td className="border px-4 py-2">3,918</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-semibold">
                  Maternal DALYs Averted
                </td>
                <td className="border px-4 py-2">1,825</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-semibold">
                  Child DALYs Averted
                </td>
                <td className="border px-4 py-2">34,904</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-semibold">
                  Total DALYs Averted
                </td>
                <td className="border px-4 py-2">36,729</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-semibold">
                  Health Care Costs Saved
                </td>
                <td className="border px-4 py-2">£926,566 (2018 GBP)</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-semibold">
                  Couple Years of Protection (CYPs)
                </td>
                <td className="border px-4 py-2">115,385</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 2021 Impact Table */}
        <h4 className="text-xl font-bold mt-4">2021</h4>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse font-kinetika text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-4 py-2 garnetFont text-black text-left">
                  Metric
                </th>
                <th className="border px-4 py-2 garnetFont text-black text-left">
                  Value
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2 font-semibold">
                  SRHR Information
                </td>
                <td className="border px-4 py-2">129,364 people</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-semibold">
                  SRHR Services
                </td>
                <td className="border px-4 py-2">31,494</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-semibold">
                  Unintended Pregnancies Averted
                </td>
                <td className="border px-4 py-2">8,813</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-semibold">
                  Live Births Averted
                </td>
                <td className="border px-4 py-2">4,923</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-semibold">
                  Abortions Averted
                </td>
                <td className="border px-4 py-2">2,597</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-semibold">
                  Maternal Deaths Averted
                </td>
                <td className="border px-4 py-2">15</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-semibold">
                  Child Deaths Averted
                </td>
                <td className="border px-4 py-2">209</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-semibold">
                  Unsafe Abortions Averted
                </td>
                <td className="border px-4 py-2">1,980</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-semibold">
                  Total DALYs Averted
                </td>
                <td className="border px-4 py-2">18,622</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-semibold">
                  Health Care Costs Saved
                </td>
                <td className="border px-4 py-2">£468,250 (2018 GBP)</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-semibold">
                  Couple Years of Protection (CYPs)
                </td>
                <td className="border px-4 py-2">55,902</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Note */}
        <p className="mt-4 italic font-light text-xs">
          Note: Impact figures were calculated using the MSI Impact Tool and are
          based on data from Reach A Hand Uganda's service delivery across the
          country.
        </p>
      </div>

      {/* Right map section */}
      <div className="map-panel lg:w-1/2 sticky top-16 h-screen">
        <div className="map-card h-full">
          <MapContainer
            center={[1.3733, 32.2903]}
            zoom={7}
            scrollWheelZoom={true}
            style={{ height: "100%", width: "100%" }}
            maxBounds={ugandaBounds}
            minZoom={6}
            maxZoom={12}
            bounds={ugandaBounds}
            boundsOptions={{ padding: [50, 50] }}
          >
            <TileLayer
              attribution='© <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {districts.map((district, idx) => (
              <Marker key={idx} position={[district.lat, district.lng]}>
                <Tooltip
                  sticky={true}
                  direction="top"
                  opacity={0.9}
                  className="custom-tooltip"
                >
                  <div className="p-2">
                    <h3 className="font-bold text-lg mb-2">{district.name}</h3>
                    <div className="text-sm">
                      <p className="font-semibold mb-1">SRHR Programs:</p>
                      <ul className="list-disc pl-4">
                        {district.impacts.map((impact, index) => (
                          <li key={index} className="text-xs">
                            {impact}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Tooltip>
                <Popup>
                  <div className="p-2">
                    <h3 className="font-bold text-lg mb-2">{district.name}</h3>
                    <div className="text-sm">
                      <p className="font-semibold mb-1">SRHR Programs:</p>
                      <ul className="list-disc pl-4">
                        {district.impacts.map((impact, index) => (
                          <li key={index}>{impact}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Section6;
