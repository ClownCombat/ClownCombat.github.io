// Helper (can be in the same file or a utility module)
function createSection(headline, items) {
    return { headline, items };
}

function createProject({ headline, client, role, sections }) {
    return {
        headline,
        projectClient: client,
        roleDescription: role,
        sections,
    };
}

export const ecommerceProject = createProject({
    headline: "Building the US webshop",
    client: "German ECommerce retailer",
    role: "Senior Frontend Engineer",
    sections: [
        createSection("Tasks", [
            "Present Features to multiple StakeHolders",
            "Implement multiple Frontend Features",
        ]),
        createSection("Project Organization", ["Scrum"]),
        createSection("System-Technologies", [
            "Adobe Experience Manager",
            "VueJs / Nuxt + VueX",
        ]),
    ],
})


export const soccerClubProject = createProject({
    headline: "Remodeling of the website",
    client: "German soccer club",
    role: "Senior Fullstack Engineer",
    sections: [
        createSection("Tasks", [
            "Connect VueJS / Nuxt with Bloomreach",
            "Implement oAuth2",
            "Implement multiple Frontend Features",
        ]),
        createSection("Project Organization", ["Scrum"]),
        createSection("System-Technologies", [
            "Bloomreach CMS",
            "VueJs / Nuxt + VueX",
            "Cloud Deployment via Azure",
            "OAuth2",
        ]),
    ],
});


export const germanBankProject = createProject({
    headline: "CMS Switch with frontend rework",
    client: "German bank",
    role: "CMS Developer",
    sections: [
        createSection("Tasks", [
            "Be part of the development team",
            "Rework web components",
        ]),
        createSection("Project Organization", ["Agile"]),
        createSection("System-Technologies", [
            "Adobe Experience Manager",
            "Java / JavaScript / ReactJs",
        ]),
    ],
})

export const germanShoppingClubProject = createProject({
    headline: "Support developing a webshop onsite",
    client: "German shopping club",
    role: "Software Developer",
    sections: [
        createSection("Tasks", [
            "Customization and extension of the webshop / Implementing functional and non function requirements",
            "Extend Payment methods",
            "Extend custom admin backend",
        ]),
        createSection("Project Organization", ["Scrum-Kanban-mix"]),
        createSection("System-Technologies", [
            "Spring Application - Spring Boot, Spring MVC",
            "Java / JavaScript / ReactJs",
            "mySQL",
            "Connection to different interfaces - Salesforce, Ebay-Product-API, Wirecard, Paypal-3d-secure-flow",
        ]),
    ],
})

export const germanRealEStateAgencyProject = createProject({
    headline: "Supporting and Improving the website of a multi-language website",
    client: "German real estate agency",
    role: "Fullstack Developer",
    sections: [
        createSection("Tasks", [
            "Maintenance and extension of the website",
            "Improving the load times significantly by implementing VueJs",
            "Embedding Google Maps API",
        ]),
        createSection("Project Organization", ["Agile"]),
        createSection("System-Technologies", [
            "Bloomreach CMS",
            "Java / JavaScript / VueJs",
            "Google Maps API",
        ]),
    ],
})

export const germanGroceriesWholesaleBusinessProject = createProject({
    headline: "Supporting and Quality-assuring the dev-team of a multi-webshop-system",
    client: "German groceries wholesale business association",
    role: "Working Student / QA",
    sections: [
        createSection("Tasks", [
            "Maintenance and extension of the website",
            "Improving the load times significantly by implementing VueJs",
            "Embedding Google Maps API",
        ]),
        createSection("Project Organization", ["Scrum"]),
        createSection("System-Technologies", [
            "Java / Spring MVC / AngularJs",
            "Selenium, JUnit",
        ]),
    ],
})

export const germanInteractiveSearchFrontend = createProject({
    headline: "Development of an interactive search interface",
    client: "Berlin open data",
    role: "Student Developer",
    sections: [
        createSection("Tasks", [
            "Mapping data API's to Frontend components",
        ]),
        createSection("Project Organization", ["Scrum"]),
        createSection("System-Technologies", [
            "Html / CSS / AngularJs",
            "D3.js",
        ]),
    ],
})