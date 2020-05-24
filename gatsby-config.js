module.exports = {
	siteMetadata: {
		title: `Self Fruition`,
		siteUrl: `https://selffruition.com`,
		description: `Focus on what you control`,
		components: {
			appbar: {
				position: "sticky",
				links: [
					{
						title: "Our Mission",
						url: "/our-mission",
					},
					// {
					// 	title: "Doc 2",
					// 	url: "/doc2",
					// },
				],
			},
			footer: {
				copyright: "selffruition.com",
				columns: [
					{
						heading: "Navigation",
						links: [
							{
								title: "Home",
								url: "/",
							},
							{
								title: "Mission",
								url: "/our-mission",
							},
						],
					},
					// {
					// 	heading: "Column 2",
					// 	links: [
					// 		{
					// 			title: "Link A",
					// 			url: "#",
					// 		},
					// 		{
					// 			title: "Link B",
					// 			url: "#",
					// 		},
					// 		{
					// 			title: "Link C",
					// 			url: "#",
					// 		},
					// 	],
					// },
					// {
					// 	heading: "Column 3",
					// 	links: [
					// 		{
					// 			title: "Link x",
					// 			url: "#",
					// 		},
					// 		{
					// 			title: "Link y",
					// 			url: "#",
					// 		},
					// 		{
					// 			title: "Link z",
					// 			url: "#",
					// 		},
					// 	],
					// },
				],
			},
		},
		templates: {
			home: {
				totalPosts: 3,
				template: "home",
			},
			pages: {
				path: "/content/pages/",
				template: "page",
			},
			posts: {
				path: "/content/posts/",
				pathPrefix: "posts",
				template: "post",
				filters: {
					tag: {
						pathPrefix: "tag",
						template: "tag",
						totalPosts: 3,
						pagination: {
							template: "resultsTag",
							resultsPerPage: 6,
						},
					},
				},
				pagination: {
					template: "resultsAll",
					resultsPerPage: 6,
				},
			},
		},
	},
	plugins: [
		{ resolve: `gatsby-theme-sky-lite` },
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Sky Lite`,
				short_name: `SkyLite`,
				start_url: `/`,
				background_color: `rebeccapurple`,
				theme_color: `rebeccapurple`,
				display: `standalone`,
				icon: `src/images/favicon.png`,
			},
		},
	],
};
