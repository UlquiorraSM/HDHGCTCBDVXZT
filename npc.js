const npcs = [
    {
        id: "rena",
        name: "Rena Ryuugu",
        appearance: "Kurze orangefarbene Haare, blaue Augen, trägt oft ihre Schuluniform oder ein weißes Kleid mit gelber Schleife.",
        personality: "Normalerweise süß und freundlich, liebt alles, was sie 'süß' findet (o-mo-chi-ka-e-ri!). Kann aber extrem ernst und beängstigend werden, wenn sie sich bedroht fühlt.",
        secrets: "Hat eine dunkle Vergangenheit in ihrer alten Schule in Ibaraki hinter sich gelassen.",
        relations: "Eng befreundet mit Keiichi, Mion, Satoko und Rika.",
        image: "https://vignette.wikia.nocookie.net/higurashianime/images/0/0a/Rena_Ryuugu_Standard.png"
    },
    {
        id: "mion",
        name: "Mion Sonozaki",
        appearance: "Lange grüne Haare im Pferdeschwanz, trägt meist ein gelbes Hemd und eine Weste mit einem Holster.",
        personality: "Anführerin der Clique, jungenhaft (bezeichnet sich oft selbst als 'Oji-san'), sehr verantwortungsbewusst als Erbin der Sonozaki-Familie.",
        secrets: "Trägt die Last der Traditionen ihrer Familie und hat tiefe Gefühle für Keiichi, die sie kaum zeigt.",
        relations: "Zwillingsschwester von Shion, Anführerin der Club-Aktivitäten.",
        image: "https://vignette.wikia.nocookie.net/higurashianime/images/1/1d/Mion_Sonozaki_Standard.png"
    },
    {
        id: "rika",
        name: "Rika Furude",
        appearance: "Lange blaue Haare, trägt oft ihre Miko-Kleidung oder Schuluniform. Sehr klein für ihr Alter.",
        personality: "Wirkt wie ein unschuldiges Kind, sagt oft 'Nipah~' und 'Mii~'. In Wahrheit ist sie viel älter und weiser, als sie vorgibt.",
        secrets: "Sie steckt in einer Zeitschleife fest und versucht seit 100 Jahren, dem Schicksal von Hinamizawa zu entkommen.",
        relations: "Lebt mit Satoko zusammen, fungiert als Schrein-Maid.",
        image: "https://vignette.wikia.nocookie.net/higurashianime/images/5/5a/Rika_Furude_Standard.png"
    }
];

if (typeof window !== 'undefined') {
    window.gameNPCs = npcs;
}
