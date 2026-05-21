export async function validateCreateTask(req, res, next){
    
    const { title, difficulty, category } = req.body

    const validDifficulties = [
        "easy",
        "medium",
        "hard"
    ]
    
    const validCategories = [
        "discipline",
        "knowledge",
        "mentality",
        "body",
        "social",
        "finances"
    ]

    if (!title || !title.trim()){
        return res.status(400).json({
            error: "Título inválido"
        })
    }

    if (!validDifficulties.includes(difficulty)){
        return res.status(400).json({
            error: "Dificuldade inválida"
        })
    }

    if (!validCategories.includes(category)){
        return res.status(400).json({
            error: "Categoria inválida"
        })
    }

    next()
}