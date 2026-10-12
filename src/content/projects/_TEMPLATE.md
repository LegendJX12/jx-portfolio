---
# HOW TO ADD A NEW PROJECT
# 1. Copy this file and rename it, e.g. my-new-project.md (lowercase, dashes, no spaces).
#    The file name becomes the web address: /projects/my-new-project
# 2. Put its files (PDFs, photos) in public/media/my-new-project/
# 3. Fill in the lines below. Lines starting with # are notes and are ignored.
# 4. Files whose name starts with _ (like this one) never appear on the site.

title: "Project name — short tagline"
award: "Gold Award"                    # what you won
issuer: "Competition name & organiser"
date: "2026-01"                        # year-month
category: coastal                      # coastal | health | digital | structures | academic
featured: false                        # true = shows on the Home page
summary: "One or two sentences that appear on the project card."
cover: ../../assets/scenes/redang-beach.jpg   # a photo in src/assets/ (optional)

team:                                  # optional
  - "Your teammate"
sdgs: [6, 13]                          # optional, UN goal numbers
kpis:                                  # optional key numbers
  - value: "50%"
    label: "energy saved"
links:                                 # optional web links
  - label: "News article"
    url: https://example.com
media:                                 # video = YouTube/Drive link; slides = PPT saved as PDF
  - type: video
    title: "Demo video"
    src: https://www.youtube.com/watch?v=XXXXXXXX
  - type: slides
    title: "Final slides"
    src: /media/my-new-project/slides.pdf
  - type: pdf
    title: "Proposal"
    src: /media/my-new-project/proposal.pdf
  - type: image
    title: "Team photo"
    src: /media/my-new-project/team.webp
---

Write the full story here in plain sentences. **Bold** works like this.
