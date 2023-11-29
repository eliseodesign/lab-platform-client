// Interfaz para la entidad SystemUser
interface SystemUser {
	id: number
	email: string
	firstName: string
	lastName: string
	img: string
	club: null | string // Puede ser nulo o una cadena
	rol: "reader" | "editor" // Tipo literal "reader" o "editor"
}
