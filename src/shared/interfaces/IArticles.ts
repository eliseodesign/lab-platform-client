// Interfaz base para las propiedades comunes de los artículos
interface IArticleBase {
	id: number
	title: string
	description: string
	keywords: string
	createdAt: string
	articleType: "notice" | "guie"
}

// Interfaz completa que extiende la interfaz base y agrega la propiedad systemUser
interface IArticleComplete extends IArticleBase {
	systemUser: SystemUser
	content: string
}
