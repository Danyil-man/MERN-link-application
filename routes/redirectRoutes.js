const {Router} = require('express');
const Link = require('../models/LinkModel')
const router = Router()

router.get('/:code', async (req, res) => {
    try {
        const link = await Link.findOne({ code: req.params.code })
        if(link){
            link.clicks++
            await link.save()
            return res.redirect(link.from)
        }

        res.status(400).json({message: "Link not found"})
      } catch (e) {
        res.status(500).json({ message: 'Something went wrong, try again' })
      }
})

module.exports = router;