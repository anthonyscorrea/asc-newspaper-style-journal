class Newspaper extends JournalSheet {
	static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: [...super.defaultOptions.classes, "newspaper"],
    });
  }
}

Hooks.on("init", (documentTypes) => {
console.log("Custom Journals | Registering the module's sheets.");

DocumentSheetConfig.registerSheet(Journal, "asc-newsaer-style-journal", Newspaper, { 
	label: "Newspaper",
	types: ["base"],
	makeDefault: false 
});

console.log("Custom Journals | Ready.")
});
