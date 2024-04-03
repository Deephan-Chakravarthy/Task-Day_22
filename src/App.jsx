import "./App.css";
import Card from "./Card";
import "/node_modules/bootstrap/dist/css/bootstrap.css";
function App() {
  let data = [
    {
      plan: "FREE",
      fee: "0",
      features: [
        {
          name: "Single User",
          enabled: true,
        },
        {
          name: "50GB Storage",
          enabled: true,
        },
        {
          name: "Unlimited Public Projects",
          enabled: true,
        },
        {
          name: "Community Access",
          enabled: true,
        },
        {
          name: "Unlimited Private Projects",
          enabled: false,
        },
        {
          name: "Dedicated Phone Support",
          enabled: false,
        },
        {
          name: "Free Subdomain",
          enabled: false,
        },
        {
          name: "Monthly Status Reports",
          enabled: false,
        },
      ],
    },
    {
      plan: "PLUS",
      fee: "9",
      features: [
        {
          name: "5 Users",
          enabled: true,
        },
        {
          name: "50GB Storage",
          enabled: true,
        },
        {
          name: "Unlimited Public Projects",
          enabled: true,
        },
        {
          name: "Community Access",
          enabled: true,
        },
        {
          name: "Unlimited Private Projects",
          enabled: true,
        },
        {
          name: "Dedicated Phone Support",
          enabled: true,
        },
        {
          name: "Free Subdomain",
          enabled: true,
        },
        {
          name: "Monthly Status Reports",
          enabled: false,
        },
      ],
    },
    {
      plan: "PRO",
      fee: "49",
      features: [
        {
          name: "Unlimited Users",
          enabled: true,
        },
        {
          name: "50GB Storage",
          enabled: true,
        },
        {
          name: "Unlimited Public Projects",
          enabled: true,
        },
        {
          name: "Community Access",
          enabled: true,
        },
        {
          name: "Unlimited Private Projects",
          enabled: true,
        },
        {
          name: "Dedicated Phone Support",
          enabled: true,
        },
        {
          name: "Free Subdomain",
          enabled: true,
        },
        {
          name: "Monthly Status Reports",
          enabled: true,
        },
      ],
      button:true
    },
  ];
  return (
    <>
      <div className="container">
        <div className="row bg-primary">
          {data.map((item, index) => {
            return <Card item={item} key={index} />;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
