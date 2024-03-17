import express from "express";
const app = express();
import path from "path";
import { fileURLToPath } from "url";

const staticPath = path.join(
    path.dirname(fileURLToPath(import.meta.url)),
    "../public"
);
app.use(express.static(staticPath));
app.set("view engine", "ejs");
app.set("views", staticPath + "/views");

app.get("/home", (req, res) => {
    res.render("home");
});

app.get("/donor-profile/1234567890", (req, res) => {
    const donor = {
        _id: "69",
        name: "Sunny Leone",
        age: 42,
        gender: "Female",
        bloodType: "O+",
        phone: "8758569103",
        email: "sunlustpicturesinc@gmail.com",
        address: "Maximum City, Andheri, Mumbai, Maharashtra, India",
        avatar: "https://akm-img-a-in.tosshub.com/indiatoday/images/photogallery/201702/6_020617043521.jpg?VersionId=V2JDnc7WHzrRspXxcMjHmwhEFpblOmbr&size=686:*",
    };

    const donationHistory = [
        {
            date: "2022-01-01",
            location: "Local Hospital",
            quantity: "5 units",
        },
        {
            date: "2022-01-02",
            location: "Blood Drive",
            quantity: "10 units",
        },
        {
            date: "2022-01-03",
            location: "Red Cross",
            quantity: "15 units",
        },
    ];

    const owner = true;

    res.render("donor-profile", { donor, donationHistory, owner });
});

app.get("/hospital-profile/1234567890", (req, res) => {
    const hospital = {
        _id: "1234567890",
        name: "Healing Haven Medical Center",
        address: "123 Main St, City, Country",
        phone: "+1 (123) 456-7890",
        email: "info@healinghaven.com",
        website: "www.healinghaven.com",
        avatar: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    };

    const availableBlood = [
        {
            type: "A+",
            quantity: 10,
            lastUpdated: "2022-01-01",
        },
        {
            type: "B+",
            quantity: 5,
            lastUpdated: "2022-01-02",
        },
        {
            type: "AB+",
            quantity: 3,
            lastUpdated: "2022-01-03",
        },
        {
            type: "O+",
            quantity: 15,
            lastUpdated: "2022-01-04",
        },
        {
            type: "O-",
            quantity: 20,
            lastUpdated: "2022-01-05",
        },
        {
            type: "AB-",
            quantity: 8,
            lastUpdated: "2022-01-06",
        },
        {
            type: "B-",
            quantity: 12,
            lastUpdated: "2022-01-07",
        },
        {
            type: "A-",
            quantity: 6,
            lastUpdated: "2022-01-08",
        },
    ];

    const stats = {
        totalReceivedDonations: 1000,
        livesSaved: 500,
        successRate: "80%",
    };

    const owner = true;

    res.render("hospital-profile", { hospital, availableBlood, stats, owner });
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.get("/signup", (req, res) => {
    res.render("signup");
});

app.get("/search", (req, res) => {
    const searchResults = [
        {
            type: "hospital",
            name: "Hospital 1",
            address: "123 Main St",
            phone: "555-1234",
        },
        {
            type: "donor",
            name: "Donor 1",
            address: "456 Elm St",
            phone: "555-5678",
        },
        {
            type: "hospital",
            name: "Hospital 2",
            address: "789 Oak St",
            phone: "555-9012",
        },
        {
            type: "donor",
            name: "Donor 2",
            address: "101 Maple St",
            phone: "555-3456",
        },
    ];
    res.render("search", { searchResults });
});

app.get("/complete-your-profile", (req, res) => {
    res.render("complete-your-profile");
});

app.get("/", (req, res) => {
    res.send("<h1>Server Is Running</h1>");
});

export default app;
