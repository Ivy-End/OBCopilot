/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => OBCopilot
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
var DEFAULT_SETTINGS = {
  mySetting: "default"
};
var OBCopilot = class extends import_obsidian.Plugin {
  async onload() {
    await this.loadSettings();
    this.addCommand({
      id: "auto-insert-space-between-zh-en",
      name: "\u4E2D\u82F1\u5B57\u7B26\u81EA\u52A8\u7A7A\u683C\uFF08Auto Insert Space\uFF09",
      editorCallback: (editor) => this.autoInsertSpace(editor)
    });
    this.registerDomEvent(document, "click", (evt) => {
      console.log("click", evt);
    });
    this.registerInterval(window.setInterval(() => console.log("setInterval"), 5 * 60 * 1e3));
  }
  onunload() {
  }
  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
  async autoInsertSpace(editor) {
    let oldContent = editor.getValue();
    let newContent = "";
    let difContent = "";
    let oldPointer = 0, newPointer = 0;
    let curChar = "", nxtChar = "";
    while (oldPointer < oldContent.length) {
      curChar = oldContent[oldPointer];
      nxtChar = oldContent[oldPointer + 1];
      newContent += curChar;
      if (nxtChar != void 0) {
        if (!this.isHalfWidthChar(curChar) && !this.isPunctuation(curChar) && this.isHalfWidthChar(nxtChar) || !this.isHalfWidthChar(nxtChar) && !this.isPunctuation(nxtChar) && this.isHalfWidthChar(curChar)) {
          if (curChar != " " && nxtChar != " ") {
            newContent += " ";
          }
        }
      }
      oldPointer++;
    }
    let isDiff = 0, totalDiff = 0;
    oldPointer = 0;
    newPointer = 0;
    while (oldPointer < oldContent.length) {
      if (oldContent[oldPointer] == newContent[newPointer]) {
        if (isDiff == 0) {
          difContent += oldContent[oldPointer];
        } else {
          difContent += "]==" + newContent[newPointer];
          isDiff = 0;
          totalDiff++;
        }
        oldPointer++;
        newPointer++;
      } else {
        if (isDiff == 1) {
          difContent += newContent[newPointer];
        } else {
          difContent += "==[" + newContent[newPointer];
          isDiff = 1;
        }
        newPointer++;
      }
    }
    editor.setValue(newContent);
    await this.showDiffResult(difContent);
    console.log(difContent);
    new import_obsidian.Notice("\u5171\u8BA1\u63D2\u5165\u7A7A\u683C " + totalDiff + " \u7EC4");
    new import_obsidian.Notice("\u81EA\u52A8\u63D2\u5165\u7A7A\u683C\u5B8C\u6210");
  }
  async showDiffResult(difContent) {
    let timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    let fileName = `\u5BF9\u6BD4\u7ED3\u679C_${timestamp}.md`;
    let file = await this.app.vault.create(fileName, difContent);
    this.app.workspace.getLeaf(true).openFile(file);
  }
  isHalfWidthChar(char) {
    return `\xB71234567890-=qwertyuiop[]asdfghjkl;'zxcvbnm,./~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?`.includes(char);
  }
  isPunctuation(char) {
    return "\uFF01\uFFE5\u2026\uFF08\uFF09\u2014{}\u3010\u3011\u3001\uFF1A\uFF1B\u201C\u201D\u2018\u2019\uFF0C\u3002\u3001\u300A\u300B\uFF1F".includes(char);
  }
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibWFpbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgQXBwLCBFZGl0b3IsIE1hcmtkb3duVmlldywgTW9kYWwsIE5vdGljZSwgUGx1Z2luLCBQbHVnaW5TZXR0aW5nVGFiLCBTZXR0aW5nIH0gZnJvbSAnb2JzaWRpYW4nO1xuaW1wb3J0IHsgV0FTSSB9IGZyb20gJ3dhc2knO1xuXG4vLyBSZW1lbWJlciB0byByZW5hbWUgdGhlc2UgY2xhc3NlcyBhbmQgaW50ZXJmYWNlcyFcblxuaW50ZXJmYWNlIE9CQ29waWxvdFNldHRpbmdzIHtcblx0bXlTZXR0aW5nOiBzdHJpbmc7XG59XG5cbmNvbnN0IERFRkFVTFRfU0VUVElOR1M6IE9CQ29waWxvdFNldHRpbmdzID0ge1xuXHRteVNldHRpbmc6ICdkZWZhdWx0J1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPQkNvcGlsb3QgZXh0ZW5kcyBQbHVnaW4ge1xuXHRzZXR0aW5nczogT0JDb3BpbG90U2V0dGluZ3M7XG5cblx0YXN5bmMgb25sb2FkKCkge1xuXHRcdGF3YWl0IHRoaXMubG9hZFNldHRpbmdzKCk7XG5cblx0XHQvLyBcdTRFMkRcdTgyRjFcdTZERjdcdTYzOTJcdTVERTVcdTUxNzdcblx0XHR0aGlzLmFkZENvbW1hbmQoe1xuXHRcdFx0aWQ6ICdhdXRvLWluc2VydC1zcGFjZS1iZXR3ZWVuLXpoLWVuJyxcblx0XHRcdG5hbWU6ICdcdTRFMkRcdTgyRjFcdTVCNTdcdTdCMjZcdTgxRUFcdTUyQThcdTdBN0FcdTY4M0NcdUZGMDhBdXRvIEluc2VydCBTcGFjZVx1RkYwOScsXG5cdFx0XHRlZGl0b3JDYWxsYmFjazogKGVkaXRvcjogRWRpdG9yKSA9PiB0aGlzLmF1dG9JbnNlcnRTcGFjZShlZGl0b3IpXG5cdFx0fSk7XG5cdFx0XG5cdFx0Ly8gSWYgdGhlIHBsdWdpbiBob29rcyB1cCBhbnkgZ2xvYmFsIERPTSBldmVudHMgKG9uIHBhcnRzIG9mIHRoZSBhcHAgdGhhdCBkb2Vzbid0IGJlbG9uZyB0byB0aGlzIHBsdWdpbilcblx0XHQvLyBVc2luZyB0aGlzIGZ1bmN0aW9uIHdpbGwgYXV0b21hdGljYWxseSByZW1vdmUgdGhlIGV2ZW50IGxpc3RlbmVyIHdoZW4gdGhpcyBwbHVnaW4gaXMgZGlzYWJsZWQuXG5cdFx0dGhpcy5yZWdpc3RlckRvbUV2ZW50KGRvY3VtZW50LCAnY2xpY2snLCAoZXZ0OiBNb3VzZUV2ZW50KSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZygnY2xpY2snLCBldnQpO1xuXHRcdH0pO1xuXG5cdFx0Ly8gV2hlbiByZWdpc3RlcmluZyBpbnRlcnZhbHMsIHRoaXMgZnVuY3Rpb24gd2lsbCBhdXRvbWF0aWNhbGx5IGNsZWFyIHRoZSBpbnRlcnZhbCB3aGVuIHRoZSBwbHVnaW4gaXMgZGlzYWJsZWQuXG5cdFx0dGhpcy5yZWdpc3RlckludGVydmFsKHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiBjb25zb2xlLmxvZygnc2V0SW50ZXJ2YWwnKSwgNSAqIDYwICogMTAwMCkpO1xuXG5cdH1cblxuXHRvbnVubG9hZCgpIHtcblxuXHR9XG5cblx0YXN5bmMgbG9hZFNldHRpbmdzKCkge1xuXHRcdHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBERUZBVUxUX1NFVFRJTkdTLCBhd2FpdCB0aGlzLmxvYWREYXRhKCkpO1xuXHR9XG5cblx0YXN5bmMgc2F2ZVNldHRpbmdzKCkge1xuXHRcdGF3YWl0IHRoaXMuc2F2ZURhdGEodGhpcy5zZXR0aW5ncyk7XG5cdH1cblxuXHRhc3luYyBhdXRvSW5zZXJ0U3BhY2UoZWRpdG9yIDogRWRpdG9yKSB7XG5cdFx0bGV0IG9sZENvbnRlbnQgPSBlZGl0b3IuZ2V0VmFsdWUoKTtcblx0XHRsZXQgbmV3Q29udGVudCA9IFwiXCI7XG5cdFx0bGV0IGRpZkNvbnRlbnQgPSBcIlwiO1xuXG5cdFx0bGV0IG9sZFBvaW50ZXIgPSAwLCBuZXdQb2ludGVyID0gMDtcblx0XHRsZXQgY3VyQ2hhciA9ICcnLCBueHRDaGFyID0gJyc7XG5cdFx0XG5cdFx0d2hpbGUgKG9sZFBvaW50ZXIgPCBvbGRDb250ZW50Lmxlbmd0aCkge1xuXHRcdFx0Y3VyQ2hhciA9IG9sZENvbnRlbnRbb2xkUG9pbnRlcl07XG5cdFx0XHRueHRDaGFyID0gb2xkQ29udGVudFtvbGRQb2ludGVyICsgMV07XG5cdFx0XHRuZXdDb250ZW50ICs9IGN1ckNoYXI7XG5cdFx0XHRcblx0XHRcdGlmIChueHRDaGFyICE9IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRpZiAoKCghdGhpcy5pc0hhbGZXaWR0aENoYXIoY3VyQ2hhcikgJiYgIXRoaXMuaXNQdW5jdHVhdGlvbihjdXJDaGFyKSkgJiYgdGhpcy5pc0hhbGZXaWR0aENoYXIobnh0Q2hhcikpIHx8IFxuXHRcdFx0XHQgICAgKCghdGhpcy5pc0hhbGZXaWR0aENoYXIobnh0Q2hhcikgJiYgIXRoaXMuaXNQdW5jdHVhdGlvbihueHRDaGFyKSkgJiYgdGhpcy5pc0hhbGZXaWR0aENoYXIoY3VyQ2hhcikpICAgICkge1xuXHRcdFx0XHRcdGlmIChjdXJDaGFyICE9ICcgJyAmJiBueHRDaGFyICE9ICcgJykgeyBuZXdDb250ZW50ICs9ICcgJzsgfVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdG9sZFBvaW50ZXIrKztcblx0XHR9XG5cblx0XHRsZXQgaXNEaWZmID0gMCwgdG90YWxEaWZmID0gMDtcblx0XHRvbGRQb2ludGVyID0gMDsgbmV3UG9pbnRlciA9IDA7XG5cdFx0d2hpbGUob2xkUG9pbnRlciA8IG9sZENvbnRlbnQubGVuZ3RoKSB7XG5cdFx0XHRpZiAob2xkQ29udGVudFtvbGRQb2ludGVyXSA9PSBuZXdDb250ZW50W25ld1BvaW50ZXJdKSB7XG5cdFx0XHRcdGlmIChpc0RpZmYgPT0gMCkgeyBkaWZDb250ZW50ICs9IG9sZENvbnRlbnRbb2xkUG9pbnRlcl07IH1cblx0XHRcdFx0ZWxzZSB7IGRpZkNvbnRlbnQgKz0gXCJdPT1cIiArIG5ld0NvbnRlbnRbbmV3UG9pbnRlcl07IGlzRGlmZiA9IDA7IHRvdGFsRGlmZisrOyB9XG5cdFx0XHRcdFxuXHRcdFx0XHRvbGRQb2ludGVyKys7IG5ld1BvaW50ZXIrKztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmIChpc0RpZmYgPT0gMSkgeyBkaWZDb250ZW50ICs9IG5ld0NvbnRlbnRbbmV3UG9pbnRlcl07IH1cblx0XHRcdFx0ZWxzZSB7IGRpZkNvbnRlbnQgKz0gXCI9PVtcIiArIG5ld0NvbnRlbnRbbmV3UG9pbnRlcl07IGlzRGlmZiA9IDE7IH1cblxuXHRcdFx0XHRuZXdQb2ludGVyKys7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdFxuXHRcdGVkaXRvci5zZXRWYWx1ZShuZXdDb250ZW50KTtcblx0XHRhd2FpdCB0aGlzLnNob3dEaWZmUmVzdWx0KGRpZkNvbnRlbnQpO1xuXG5cdFx0Y29uc29sZS5sb2coZGlmQ29udGVudCk7XG5cdFx0bmV3IE5vdGljZSgnXHU1MTcxXHU4QkExXHU2M0QyXHU1MTY1XHU3QTdBXHU2ODNDICcgKyB0b3RhbERpZmYgKyAnIFx1N0VDNCcpO1xuXHRcdG5ldyBOb3RpY2UoJ1x1ODFFQVx1NTJBOFx1NjNEMlx1NTE2NVx1N0E3QVx1NjgzQ1x1NUI4Q1x1NjIxMCcpO1xuXHR9XG5cblx0YXN5bmMgc2hvd0RpZmZSZXN1bHQoZGlmQ29udGVudCA6IHN0cmluZykge1xuXHRcdGxldCB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkucmVwbGFjZSgvWzouXS9nLCAnLScpOyAvLyBcdTY4M0NcdTVGMEZcdTUzMTZcdTY1RjZcdTk1RjRcdTYyMzNcblx0XHRsZXQgZmlsZU5hbWUgPSBgXHU1QkY5XHU2QkQ0XHU3RUQzXHU2NzlDXyR7dGltZXN0YW1wfS5tZGA7XG5cdFx0bGV0IGZpbGUgPSBhd2FpdCB0aGlzLmFwcC52YXVsdC5jcmVhdGUoZmlsZU5hbWUsIGRpZkNvbnRlbnQpO1xuXHRcdHRoaXMuYXBwLndvcmtzcGFjZS5nZXRMZWFmKHRydWUpLm9wZW5GaWxlKGZpbGUpO1xuXHR9XG5cblx0aXNIYWxmV2lkdGhDaGFyKGNoYXIgOiBzdHJpbmcpIDogYm9vbGVhbiB7XG5cdFx0cmV0dXJuICdcdTAwQjcxMjM0NTY3ODkwLT1xd2VydHl1aW9wW11cXGFzZGZnaGprbDtcXCd6eGN2Ym5tLC4vfiFAIyQlXiYqKClfK1FXRVJUWVVJT1B7fXxBU0RGR0hKS0w6XCJaWENWQk5NPD4/Jy5pbmNsdWRlcyhjaGFyKVxuXHR9XG5cblx0aXNQdW5jdHVhdGlvbihjaGFyIDogc3RyaW5nKSA6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAnXHVGRjAxXHVGRkU1XHUyMDI2XHVGRjA4XHVGRjA5XHUyMDE0e31cdTMwMTBcdTMwMTFcdTMwMDFcdUZGMUFcdUZGMUJcdTIwMUNcdTIwMURcdTIwMThcdTIwMTlcdUZGMENcdTMwMDJcdTMwMDFcdTMwMEFcdTMwMEJcdUZGMUYnLmluY2x1ZGVzKGNoYXIpO1xuXHR9XG59Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUE0RjtBQVM1RixJQUFNLG1CQUFzQztBQUFBLEVBQzNDLFdBQVc7QUFDWjtBQUVBLElBQXFCLFlBQXJCLGNBQXVDLHVCQUFPO0FBQUEsRUFHN0MsTUFBTSxTQUFTO0FBQ2QsVUFBTSxLQUFLLGFBQWE7QUFHeEIsU0FBSyxXQUFXO0FBQUEsTUFDZixJQUFJO0FBQUEsTUFDSixNQUFNO0FBQUEsTUFDTixnQkFBZ0IsQ0FBQyxXQUFtQixLQUFLLGdCQUFnQixNQUFNO0FBQUEsSUFDaEUsQ0FBQztBQUlELFNBQUssaUJBQWlCLFVBQVUsU0FBUyxDQUFDLFFBQW9CO0FBQzdELGNBQVEsSUFBSSxTQUFTLEdBQUc7QUFBQSxJQUN6QixDQUFDO0FBR0QsU0FBSyxpQkFBaUIsT0FBTyxZQUFZLE1BQU0sUUFBUSxJQUFJLGFBQWEsR0FBRyxJQUFJLEtBQUssR0FBSSxDQUFDO0FBQUEsRUFFMUY7QUFBQSxFQUVBLFdBQVc7QUFBQSxFQUVYO0FBQUEsRUFFQSxNQUFNLGVBQWU7QUFDcEIsU0FBSyxXQUFXLE9BQU8sT0FBTyxDQUFDLEdBQUcsa0JBQWtCLE1BQU0sS0FBSyxTQUFTLENBQUM7QUFBQSxFQUMxRTtBQUFBLEVBRUEsTUFBTSxlQUFlO0FBQ3BCLFVBQU0sS0FBSyxTQUFTLEtBQUssUUFBUTtBQUFBLEVBQ2xDO0FBQUEsRUFFQSxNQUFNLGdCQUFnQixRQUFpQjtBQUN0QyxRQUFJLGFBQWEsT0FBTyxTQUFTO0FBQ2pDLFFBQUksYUFBYTtBQUNqQixRQUFJLGFBQWE7QUFFakIsUUFBSSxhQUFhLEdBQUcsYUFBYTtBQUNqQyxRQUFJLFVBQVUsSUFBSSxVQUFVO0FBRTVCLFdBQU8sYUFBYSxXQUFXLFFBQVE7QUFDdEMsZ0JBQVUsV0FBVyxVQUFVO0FBQy9CLGdCQUFVLFdBQVcsYUFBYSxDQUFDO0FBQ25DLG9CQUFjO0FBRWQsVUFBSSxXQUFXLFFBQVc7QUFDekIsWUFBTSxDQUFDLEtBQUssZ0JBQWdCLE9BQU8sS0FBSyxDQUFDLEtBQUssY0FBYyxPQUFPLEtBQU0sS0FBSyxnQkFBZ0IsT0FBTyxLQUMvRixDQUFDLEtBQUssZ0JBQWdCLE9BQU8sS0FBSyxDQUFDLEtBQUssY0FBYyxPQUFPLEtBQU0sS0FBSyxnQkFBZ0IsT0FBTyxHQUFRO0FBQzVHLGNBQUksV0FBVyxPQUFPLFdBQVcsS0FBSztBQUFFLDBCQUFjO0FBQUEsVUFBSztBQUFBLFFBQzVEO0FBQUEsTUFDRDtBQUVBO0FBQUEsSUFDRDtBQUVBLFFBQUksU0FBUyxHQUFHLFlBQVk7QUFDNUIsaUJBQWE7QUFBRyxpQkFBYTtBQUM3QixXQUFNLGFBQWEsV0FBVyxRQUFRO0FBQ3JDLFVBQUksV0FBVyxVQUFVLEtBQUssV0FBVyxVQUFVLEdBQUc7QUFDckQsWUFBSSxVQUFVLEdBQUc7QUFBRSx3QkFBYyxXQUFXLFVBQVU7QUFBQSxRQUFHLE9BQ3BEO0FBQUUsd0JBQWMsUUFBUSxXQUFXLFVBQVU7QUFBRyxtQkFBUztBQUFHO0FBQUEsUUFBYTtBQUU5RTtBQUFjO0FBQUEsTUFDZixPQUFPO0FBQ04sWUFBSSxVQUFVLEdBQUc7QUFBRSx3QkFBYyxXQUFXLFVBQVU7QUFBQSxRQUFHLE9BQ3BEO0FBQUUsd0JBQWMsUUFBUSxXQUFXLFVBQVU7QUFBRyxtQkFBUztBQUFBLFFBQUc7QUFFakU7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUVBLFdBQU8sU0FBUyxVQUFVO0FBQzFCLFVBQU0sS0FBSyxlQUFlLFVBQVU7QUFFcEMsWUFBUSxJQUFJLFVBQVU7QUFDdEIsUUFBSSx1QkFBTywwQ0FBWSxZQUFZLFNBQUk7QUFDdkMsUUFBSSx1QkFBTyxrREFBVTtBQUFBLEVBQ3RCO0FBQUEsRUFFQSxNQUFNLGVBQWUsWUFBcUI7QUFDekMsUUFBSSxZQUFZLElBQUksS0FBSyxFQUFFLFlBQVksRUFBRSxRQUFRLFNBQVMsR0FBRztBQUM3RCxRQUFJLFdBQVcsNEJBQVE7QUFDdkIsUUFBSSxPQUFPLE1BQU0sS0FBSyxJQUFJLE1BQU0sT0FBTyxVQUFVLFVBQVU7QUFDM0QsU0FBSyxJQUFJLFVBQVUsUUFBUSxJQUFJLEVBQUUsU0FBUyxJQUFJO0FBQUEsRUFDL0M7QUFBQSxFQUVBLGdCQUFnQixNQUF5QjtBQUN4QyxXQUFPLG1HQUFrRyxTQUFTLElBQUk7QUFBQSxFQUN2SDtBQUFBLEVBRUEsY0FBYyxNQUF5QjtBQUN0QyxXQUFPLG1JQUEwQixTQUFTLElBQUk7QUFBQSxFQUMvQztBQUNEOyIsCiAgIm5hbWVzIjogW10KfQo=