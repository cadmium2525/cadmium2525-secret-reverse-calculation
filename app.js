
// ==========================================
// part 1: Constants & Data
// ==========================================

const RAW_PRESETS = [
    { name: "四大大会制覇秘伝", stat: "ライフ", s1: 7, s2: 10, s3: 15, exc: false },
    { name: "四大大会制覇秘伝", stat: "ちから", s1: 7, s2: 10, s3: 15 },
    { name: "四大大会制覇秘伝", stat: "かしこさ", s1: 7, s2: 10, s3: 15 },
    { name: "四大大会制覇秘伝", stat: "命中", s1: 7, s2: 10, s3: 15 },
    { name: "四大大会制覇秘伝", stat: "回避", s1: 7, s2: 10, s3: 15 },
    { name: "四大大会制覇秘伝", stat: "丈夫さ", s1: 7, s2: 10, s3: 15 },
    { name: "四大大会完全制覇秘伝", stat: "ライフ", s1: 9, s2: 12, s3: 18, exc: false },
    { name: "四大大会完全制覇秘伝", stat: "ちから", s1: 9, s2: 12, s3: 18 },
    { name: "四大大会完全制覇秘伝", stat: "かしこさ", s1: 9, s2: 12, s3: 18 },
    { name: "四大大会完全制覇秘伝", stat: "命中", s1: 9, s2: 12, s3: 18 },
    { name: "四大大会完全制覇秘伝", stat: "回避", s1: 9, s2: 12, s3: 18 },
    { name: "四大大会完全制覇秘伝", stat: "丈夫さ", s1: 9, s2: 12, s3: 18 },
    { name: "モンスターダービー秘伝", stat: "ライフ", s1: 4, s2: 8, s3: 12, exc: false },
    { name: "モンスターダービー秘伝", stat: "回避", s1: 4, s2: 8, s3: 12 },
    { name: "モンスターダービー秘伝", stat: "丈夫さ", s1: 4, s2: 8, s3: 12 },
    { name: "グレイテスト4秘伝", stat: "命中", s1: 3, s2: 5, s3: 8, exc: false },
    { name: "M-1グランプリ秘伝", stat: "回避", s1: 3, s2: 5, s3: 8, exc: false },
    { name: "ウィナーズ秘伝", stat: "丈夫さ", s1: 3, s2: 5, s3: 8, exc: false },
    { name: "ワールドモンスターズ秘伝", stat: "ライフ", s1: 3, s2: 5, s3: 8, exc: false },
    { name: "天星翼秘伝", stat: "ちから", s1: 3, s2: 5, s3: 7, exc: false, pa: "A", pc: "C" },
    { name: "天星翼秘伝", stat: "かしこさ", s1: 3, s2: 5, s3: 7, pa: "A", pc: "C" },
    { name: "天星翼秘伝", stat: "丈夫さ", s1: 3, s2: 5, s3: 7, pa: "A", pc: "C" },
    { name: "天星翼秘伝", stat: "能力pt", s1: 10, s2: 20, s3: 30, pb: "B", pc: "C" },
    { name: "傷だらけのプライド秘伝", stat: "ライフ", s1: 10, s2: 12, s3: 14, exc: false },
    { name: "傷だらけのプライド秘伝", stat: "命中", s1: 10, s2: 12, s3: 14 },
    { name: "傷だらけのプライド秘伝", stat: "回避", s1: 10, s2: 12, s3: 14 },
    { name: "傷だらけのプライド秘伝", stat: "能力pt", s1: 60, s2: 90, s3: 120 },
    { name: "星統べる六天秘伝", stat: "ちから", s1: 10, s2: 12, s3: 14, exc: false },
    { name: "星統べる六天秘伝", stat: "かしこさ", s1: 10, s2: 12, s3: 14 },
    { name: "星統べる六天秘伝", stat: "丈夫さ", s1: 10, s2: 12, s3: 14 },
    { name: "星統べる六天秘伝", stat: "能力pt", s1: 60, s2: 90, s3: 120 },
    { name: "六天将秘伝", stat: "ライフ", s1: 3, s2: 5, s3: 7, exc: false },
    { name: "六天将秘伝", stat: "命中", s1: 3, s2: 5, s3: 7 },
    { name: "六天将秘伝", stat: "回避", s1: 3, s2: 5, s3: 7 },
    { name: "六天将秘伝", stat: "能力pt", s1: 10, s2: 20, s3: 30 },
    { name: "交差する運命・星", stat: "ちから", s1: 6, s2: 10, s3: 12, exc: false },
    { name: "交差する運命・星", stat: "かしこさ", s1: 6, s2: 10, s3: 12 },
    { name: "交差する運命・星", stat: "能力pt", s1: 10, s2: 20, s3: 30 },
    { name: "交差する運命・翼", stat: "ライフ", s1: 4, s2: 6, s3: 8, exc: false },
    { name: "交差する運命・翼", stat: "回避", s1: 4, s2: 6, s3: 8 },
    { name: "交差する運命・翼", stat: "能力pt", s1: 10, s2: 20, s3: 30 },
    { name: "交差する運命・天", stat: "命中", s1: 4, s2: 6, s3: 8, exc: false },
    { name: "交差する運命・天", stat: "丈夫さ", s1: 4, s2: 6, s3: 8 },
    { name: "交差する運命・天", stat: "能力pt", s1: 10, s2: 20, s3: 30 },
    { name: "桔梗賞制覇", stat: "ライフ", s1: 2, s2: 4, s3: 6, exc: false },
    { name: "桔梗賞制覇", stat: "命中", s1: 2, s2: 4, s3: 6 },
    { name: "桔梗賞制覇", stat: "丈夫さ", s1: 2, s2: 4, s3: 6 },
    { name: "六英雄杯・煌", stat: "命中", s1: 4, s2: 5, s3: 6, exc: false },
    { name: "六英雄杯・煌", stat: "丈夫さ", s1: 4, s2: 5, s3: 6 },
    { name: "ソロモンの鍵・師走", stat: "かしこさ", s1: 1, s2: 1, s3: 1, exc: true, pa: "A" },
    { name: "ソロモンの鍵・師走", stat: "かしこさ", s1: 2, s2: 2, s3: 2, pb: "B" },
    { name: "ソロモンの鍵・師走", stat: "丈夫さ", s1: 1, s2: 1, s3: 1, pc: "C" },
    { name: "ソロモンの鍵・師走", stat: "丈夫さ", s1: 2, s2: 2, s3: 2, pd: "D" }
];

function generateDefaults() {
    const map = {};
    let idCounter = 1;
    RAW_PRESETS.forEach(item => {
        if (!map[item.name]) {
            map[item.name] = {
                id: idCounter++,
                name: item.name,
                isException: item.exc === true,
                rows: []
            };
        }
        if (item.exc !== undefined) {
            map[item.name].isException = item.exc;
        }

        map[item.name].rows.push({
            stat: item.stat,
            s1: item.s1, s2: item.s2, s3: item.s3,
            isPA: !!item.pa, isPB: !!item.pb, isPC: !!item.pc,
            isPD: !!item.pd, isPE: !!item.pe, isPF: !!item.pf
        });
    });
    return Object.values(map);
}

const DEFAULT_SECRETS = generateDefaults();
const FAMILY_MEMBERS = ['father', 'f-gf', 'f-gm', 'mother', 'm-gf', 'm-gm'];
const STATUS_LIST = ["ライフ", "ちから", "かしこさ", "命中", "回避", "丈夫さ", "能力pt"];
const EPSILON = 1e-4;

let whiteSecretDefs = [];
let familyData = {};
let historyData = [];

// Solver control
let currentSolverStopper = null;

// ==========================================
// part 2: UI Logic
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    initTabs();
    initUI();
    initGlobalDelegation();
    try {
        loadData();
    } catch (e) {
        console.error("Data loading failed:", e);
        alert("データの読み込み中にエラーが発生しました。");
    }
});

function loadData() {
    // Load Definitions
    try {
        const storedDefs = localStorage.getItem('whiteSecretDefs_v2');
        if (storedDefs) {
            whiteSecretDefs = JSON.parse(storedDefs);
            if (!Array.isArray(whiteSecretDefs)) throw new Error("Invalid format");
            if (whiteSecretDefs.length === 0) {
                whiteSecretDefs = JSON.parse(JSON.stringify(DEFAULT_SECRETS));
                saveDefinitions();
            }
        } else {
            whiteSecretDefs = JSON.parse(JSON.stringify(DEFAULT_SECRETS));
            saveDefinitions();
        }
    } catch (e) {
        whiteSecretDefs = JSON.parse(JSON.stringify(DEFAULT_SECRETS));
    }
    renderDefTable();

    // Load Family Data
    try {
        const storedFamily = localStorage.getItem('familyData');
        if (storedFamily) {
            familyData = JSON.parse(storedFamily);
        } else {
            FAMILY_MEMBERS.forEach(m => familyData[m] = []);
            saveFamilyData();
        }
        renderFamilyTree();
    } catch (e) {
        FAMILY_MEMBERS.forEach(m => familyData[m] = []);
        renderFamilyTree();
    }

    // Load History
    try {
        const storedHistory = localStorage.getItem('calcHistory');
        if (storedHistory) {
            historyData = JSON.parse(storedHistory);
            if (!Array.isArray(historyData)) historyData = [];
            renderHistory();
        }
    } catch (e) {
        historyData = [];
        renderHistory();
    }

    loadInputValues();
}

function initTabs() {
    const buttons = document.querySelectorAll('.nav-btn');
    const contents = document.querySelectorAll('.tab-content');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));
            btn.classList.add('active');
            const target = document.getElementById(btn.getAttribute('data-tab'));
            if (target) target.classList.add('active');
        });
    });
}

function initUI() {
    const inputs = document.querySelectorAll('.stat-input, #compatibility-ratio');
    inputs.forEach(input => input.addEventListener('change', saveInputValues));

    const calcBtn = document.getElementById('btn-calculate');
    if (calcBtn) calcBtn.addEventListener('click', calculate);

    const cancelBtn = document.getElementById('btn-cancel');
    if (cancelBtn) cancelBtn.addEventListener('click', cancelCalculation);

    const resetBtn = document.getElementById('btn-reset-history');
    if (resetBtn) resetBtn.addEventListener('click', resetHistory);

    const clearTargetBtn = document.getElementById('btn-clear-target');
    if (clearTargetBtn) clearTargetBtn.addEventListener('click', clearTargetInputs);

    const copyBtn = document.getElementById('btn-copy-history');
    if (copyBtn) copyBtn.addEventListener('click', copyHistoryTSV);
}

function initGlobalDelegation() {
    document.body.addEventListener('click', (e) => {
        const deleteBtn = e.target.closest('.delete-def-btn');
        if (deleteBtn) {
            deleteDefinition(parseInt(deleteBtn.dataset.index));
            return;
        }
        const editBtn = e.target.closest('.edit-def-btn');
        if (editBtn) {
            openDefModal(parseInt(editBtn.dataset.index));
            return;
        }
        const removeFamilyBtn = e.target.closest('.remove-family-secret-btn');
        if (removeFamilyBtn) {
            removeSecretFromMember(removeFamilyBtn.dataset.member, parseInt(removeFamilyBtn.dataset.index));
            return;
        }
    });
}

// Storage Helpers
function saveDefinitions() {
    localStorage.setItem('whiteSecretDefs_v2', JSON.stringify(whiteSecretDefs));
    renderDefTable();
}
function saveFamilyData() {
    localStorage.setItem('familyData', JSON.stringify(familyData));
    renderFamilyTree();
}
function saveHistory() {
    localStorage.setItem('calcHistory', JSON.stringify(historyData));
    renderHistory();
}
function resetHistory() {
    if (confirm('履歴をすべて削除しますか？')) {
        historyData = [];
        saveHistory();
    }
}
function clearTargetInputs() {
    if (confirm('目標ステータス・能力ptをクリアしますか？')) {
        const ids = ['target-life', 'target-pow', 'target-int', 'target-ski', 'target-spd', 'target-def', 'target-pt'];
        ids.forEach(id => {
            const el = document.getElementById(id);
            if (el) el.value = '';
        });
        saveInputValues();
    }
}
function resetFamilyData() {
    if (confirm('全世代の所持秘伝を削除しますか？')) {
        FAMILY_MEMBERS.forEach(m => familyData[m] = []);
        saveFamilyData();
    }
}
function saveInputValues() {
    const data = {};
    document.querySelectorAll('.stat-input, #compatibility-ratio').forEach(el => data[el.id] = el.value);
    localStorage.setItem('inputValues', JSON.stringify(data));
}
function loadInputValues() {
    try {
        const stored = localStorage.getItem('inputValues');
        if (stored) {
            const data = JSON.parse(stored);
            for (const [id, val] of Object.entries(data)) {
                const el = document.getElementById(id);
                if (el) el.value = val;
            }
        }
    } catch (e) { }
}

// Def Table Management
function renderDefTable() {
    const tbody = document.querySelector('#def-table tbody');
    if (!tbody) return;
    tbody.innerHTML = '';
    whiteSecretDefs.forEach((def, index) => {
        const tr = document.createElement('tr');
        let subRowsHtml = '<div class="detailed-stat-list">';
        def.rows.forEach(r => {
            let patterns = [];
            if (r.isPA) patterns.push('<span class="pattern-badge p-a">A</span>');
            if (r.isPB) patterns.push('<span class="pattern-badge p-b">B</span>');
            if (r.isPC) patterns.push('<span class="pattern-badge p-c">C</span>');
            if (r.isPD) patterns.push('<span class="pattern-badge p-d">D</span>');
            if (r.isPE) patterns.push('<span class="pattern-badge p-e">E</span>');
            if (r.isPF) patterns.push('<span class="pattern-badge p-f">F</span>');
            subRowsHtml += `<div class="detailed-stat-row">
                ${r.stat} [${r.s1}/${r.s2}/${r.s3}] ${patterns.join('')}
            </div>`;
        });
        subRowsHtml += '</div>';

        let nameHtml = def.name;
        if (def.isException) nameHtml += ' <span style="font-size:0.8rem; color:var(--error-color); border:1px solid var(--error-color); border-radius:4px; padding:0 2px;">例外</span>';

        tr.innerHTML = `
            <td style="vertical-align: top; padding-top: 1rem;">${nameHtml}</td>
            <td>${subRowsHtml}</td>
            <td style="vertical-align: top; padding-top: 1rem;">
                <button class="secondary-btn small-btn edit-def-btn" data-index="${index}">編集</button>
                <button class="remove-btn delete-def-btn" data-index="${index}" style="margin-left: 0.5rem;">×</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function deleteDefinition(index) {
    if (confirm('削除しますか？')) {
        whiteSecretDefs.splice(index, 1);
        saveDefinitions();
    }
}

// Modal Logic
let currentEditIndex = -1;
let currentEditRows = [];
function openDefModal(index = -1) {
    currentEditIndex = index;
    const modal = document.getElementById('def-modal');
    const nameInput = document.getElementById('def-name');
    const rowsContainer = document.getElementById('def-stat-rows');
    rowsContainer.innerHTML = '';

    if (index >= 0) {
        const def = whiteSecretDefs[index];
        nameInput.value = def.name;
        document.getElementById('def-is-exception').checked = !!def.isException;
        currentEditRows = JSON.parse(JSON.stringify(def.rows));
    } else {
        nameInput.value = '';
        document.getElementById('def-is-exception').checked = false;
        currentEditRows = [{ stat: '能力pt', s1: 0, s2: 0, s3: 0, isPA: false }];
    }
    renderModalRows();
    modal.classList.remove('hidden');
}
function renderModalRows() {
    const container = document.getElementById('def-stat-rows');
    container.innerHTML = '';
    currentEditRows.forEach((row, idx) => {
        const div = document.createElement('div');
        div.className = 'stat-row-item';
        const removeBtn = currentEditRows.length > 1 ? `<button class="secondary-btn small-btn remove-row-btn" onclick="removeStatRow(${idx})"><span class="material-icons-round">delete_outline</span></button>` : '';
        const options = STATUS_LIST.map(s => `<option value="${s}" ${s === row.stat ? 'selected' : ''}>${s}</option>`).join('');
        div.innerHTML = `
            ${removeBtn}
            <div class="stat-row-grid">
                 <select onchange="updateRowStat(${idx}, this.value)">${options}</select>
                 <input type="number" placeholder="★1" value="${row.s1}" onchange="updateRowVal(${idx}, 's1', this.value)">
                 <input type="number" placeholder="★2" value="${row.s2}" onchange="updateRowVal(${idx}, 's2', this.value)">
                 <input type="number" placeholder="★3" value="${row.s3}" onchange="updateRowVal(${idx}, 's3', this.value)">
            </div>
            <div class="stat-row-patterns">
                <span>パターン:</span>
                <div class="pattern-toggles">
                    <button class="pattern-toggle-btn p-a ${row.isPA ? 'active' : ''}" onclick="toggleRowPattern(${idx}, 'isPA')">A</button>
                    <button class="pattern-toggle-btn p-b ${row.isPB ? 'active' : ''}" onclick="toggleRowPattern(${idx}, 'isPB')">B</button>
                    <button class="pattern-toggle-btn p-c ${row.isPC ? 'active' : ''}" onclick="toggleRowPattern(${idx}, 'isPC')">C</button>
                    <button class="pattern-toggle-btn p-d ${row.isPD ? 'active' : ''}" onclick="toggleRowPattern(${idx}, 'isPD')">D</button>
                    <button class="pattern-toggle-btn p-e ${row.isPE ? 'active' : ''}" onclick="toggleRowPattern(${idx}, 'isPE')">E</button>
                    <button class="pattern-toggle-btn p-f ${row.isPF ? 'active' : ''}" onclick="toggleRowPattern(${idx}, 'isPF')">F</button>
                </div>
            </div>`;
        container.appendChild(div);
    });
}
function updateRowStat(idx, val) { currentEditRows[idx].stat = val; }
function updateRowVal(idx, key, val) { currentEditRows[idx][key] = parseFloat(val) || 0; }
function toggleRowPattern(idx, key) {
    currentEditRows[idx][key] = !currentEditRows[idx][key];
    renderModalRows();
}
function addStatRow() {
    currentEditRows.push({ stat: 'ライフ', s1: 0, s2: 0, s3: 0 });
    renderModalRows();
}
function removeStatRow(idx) {
    currentEditRows.splice(idx, 1);
    renderModalRows();
}
function saveDefinition() {
    const name = document.getElementById('def-name').value;
    if (!name) { alert('秘伝名は必須です'); return; }
    const newDef = {
        id: currentEditIndex >= 0 ? whiteSecretDefs[currentEditIndex].id : Date.now(),
        name: name,
        isException: document.getElementById('def-is-exception').checked,
        rows: currentEditRows
    };
    if (currentEditIndex >= 0) whiteSecretDefs[currentEditIndex] = newDef;
    else whiteSecretDefs.push(newDef);
    saveDefinitions();
    closeModal('def-modal');
}
function closeModal(id) { document.getElementById(id).classList.add('hidden'); }

// Family Tree
function renderFamilyTree() {
    FAMILY_MEMBERS.forEach(member => {
        const container = document.getElementById(`list-${member}`);
        if (!container) return;
        container.innerHTML = '';
        if (familyData[member]) {
            familyData[member].forEach((item, idx) => {
                const div = document.createElement('div');
                div.className = 'secret-item';
                div.innerHTML = `
                    <div class="secret-info"><span>${item.name}</span><span class="star-badge">★${item.star}</span></div>
                    <button class="remove-btn remove-family-secret-btn" data-member="${member}" data-index="${idx}">×</button>
                `;
                container.appendChild(div);
            });
        }
    });
}
let currentAddMember = null;
function addSecretToMember(member) {
    currentAddMember = member;
    const select = document.getElementById('add-secret-select');
    select.innerHTML = '';
    if (whiteSecretDefs.length === 0) { alert("先に定義を作成してください"); return; }
    const sortedDefs = [...whiteSecretDefs].sort((a, b) => a.name.localeCompare(b.name, 'ja'));
    sortedDefs.forEach(def => {
        const opt = document.createElement('option');
        opt.value = def.name; opt.text = def.name;
        select.appendChild(opt);
    });
    selectStarNew(3);
    document.getElementById('add-secret-modal').classList.remove('hidden');
}
function selectStarNew(star) {
    document.getElementById('add-secret-star').value = star;
    for (let i = 1; i <= 3; i++) {
        const icon = document.getElementById(`star-${i}`);
        if (i <= star) { icon.innerText = 'star'; icon.classList.add('active'); }
        else { icon.innerText = 'star_border'; icon.classList.remove('active'); }
    }
}
function confirmAddSecret() {
    const name = document.getElementById('add-secret-select').value;
    const star = parseInt(document.getElementById('add-secret-star').value);
    if (!familyData[currentAddMember]) familyData[currentAddMember] = [];
    familyData[currentAddMember].push({ name, star });
    saveFamilyData();
    closeModal('add-secret-modal');
}
function removeSecretFromMember(member, index) {
    familyData[member].splice(index, 1);
    saveFamilyData();
}

// History
function addToHistory(result, req, ownedSecrets) {
    const entry = {
        timestamp: new Date().toISOString(),
        combo: result.combo || [],
        actualStatSum: result.actualStatSum || 0,
        ownedSnapshot: JSON.parse(JSON.stringify(ownedSecrets))
    };
    historyData.push(entry);
    saveHistory();
}
function renderHistory() {
    const table = document.getElementById('history-table');
    const emptyMsg = document.getElementById('history-empty-msg');
    if (!table || !emptyMsg) return;
    if (historyData.length === 0) {
        table.innerHTML = ''; emptyMsg.style.display = 'block'; return;
    }
    emptyMsg.style.display = 'none';

    // Unique Owned Keys
    const uniqueOwnedKeys = new Set();
    historyData.forEach(entry => {
        if (entry.ownedSnapshot) entry.ownedSnapshot.forEach(s => uniqueOwnedKeys.add(`${s.name}-${s.star}`));
    });
    const ownedRowKeys = Array.from(uniqueOwnedKeys).map(k => {
        const parts = k.split('-'); const star = parseInt(parts.pop());
        return { name: parts.join('-'), star, key: k };
    }).sort((a, b) => (a.name !== b.name) ? a.name.localeCompare(b.name, 'ja') : b.star - a.star);

    // Build Rows
    const rows = [];
    const currentOwnedNames = new Set(ownedRowKeys.map(k => k.name));
    const sortedDefNames = whiteSecretDefs.map(d => d.name).filter(n => currentOwnedNames.has(n)).sort((a, b) => a.localeCompare(b, 'ja'));

    sortedDefNames.forEach(name => {
        [3, 2, 1].forEach(star => {
            // Check if this exists in ANY history combo?
            const isUsed = historyData.some(h => (h.combo || []).some(s => s.name === name && s.star === star));
            if (isUsed) {
                rows.push({ type: 'secret', name, star });
            }
        });
    });

    rows.push({ type: 'separator' });
    rows.push({ type: 'summary', label: '発動秘伝数', unit: '(合計)' });
    rows.push({ type: 'summary', label: '発動秘伝星数合計', unit: '(合計)' });
    rows.push({ type: 'summary', label: '上昇ステータス合計' });
    rows.push({ type: 'separator' });
    rows.push({ type: 'analysis', label: '発動星3秘伝数', unit: '(個)' });
    rows.push({ type: 'analysis', label: '所持星3秘伝総数', unit: '(個)' });
    rows.push({ type: 'analysis', label: '星3秘伝発動率', unit: '(%)' });
    rows.push({ type: 'separator' });
    rows.push({ type: 'analysis', label: '発動星2秘伝数', unit: '(個)' });
    rows.push({ type: 'analysis', label: '所持星2秘伝総数', unit: '(個)' });
    rows.push({ type: 'analysis', label: '星2秘伝発動率', unit: '(%)' });
    rows.push({ type: 'separator' });
    rows.push({ type: 'analysis', label: '発動星1秘伝数', unit: '(個)' });
    rows.push({ type: 'analysis', label: '所持星1秘伝総数', unit: '(個)' });
    rows.push({ type: 'analysis', label: '星1秘伝発動率', unit: '(%)' });
    rows.push({ type: 'separator' });
    rows.push({ type: 'header', label: '所持白秘伝一覧' });
    rows.push({ type: 'header_split', label1: '秘伝名', label2: '星数' });
    ownedRowKeys.forEach(k => rows.push({ type: 'owned', key: k.key, name: k.name, star: k.star }));

    let html = '<thead><tr><th>項目</th><th>星数</th>';
    historyData.forEach((_, i) => html += `<th>${i + 1}回目</th>`);
    html += '</tr></thead><tbody>';

    rows.forEach(row => {
        if (row.type === 'separator') {
            html += '<tr class="separator-row"><td colspan="' + (historyData.length + 2) + '"></td></tr>';
            return;
        }
        let label = '', starStr = '';
        if (row.type === 'secret') { label = row.name; starStr = '★'.repeat(row.star) + '☆'.repeat(3 - row.star); }
        else if (row.type === 'owned') { label = row.name + "'"; starStr = '★'.repeat(row.star) + '☆'.repeat(3 - row.star); }
        else if (row.type.includes('header')) { label = row.label; starStr = ''; }
        else { label = row.label; starStr = row.unit || ''; }

        let rowHtml = `<tr><td>${label}</td><td>${starStr}</td>`;
        if (row.type === 'header_split') rowHtml = `<tr><td>${row.label1}</td><td>${row.label2}</td>`;

        historyData.forEach(h => {
            let val = '';
            const combo = h.combo || [];
            const os = h.ownedSnapshot || [];

            if (row.type === 'secret') {
                const c = combo.filter(s => s.name === row.name && s.star === row.star).length;
                val = c;
            } else if (row.type === 'summary') {
                // For summary, ignore exceptions
                const filtered = combo.filter(s => {
                    const def = whiteSecretDefs.find(d => d.name === s.name);
                    return !def || !def.isException;
                });
                if (row.label.includes('発動秘伝数')) val = filtered.length;
                if (row.label.includes('星数合計')) val = filtered.reduce((acc, x) => acc + x.star, 0);
                if (row.label === '上昇ステータス合計') val = h.actualStatSum;
            } else if (row.type === 'analysis') {
                const star = row.label.includes('星3') ? 3 : row.label.includes('星2') ? 2 : 1;
                const isEx = (nm) => { const d = whiteSecretDefs.find(x => x.name === nm); return d && d.isException; };
                if (row.label.endsWith('発動秘伝数') || (row.label.includes('発動') && !row.label.includes('率'))) {
                    val = combo.filter(s => s.star === star && !isEx(s.name)).length;
                } else if (row.label.includes('所持')) {
                    val = os.filter(s => s.star === star && !isEx(s.name)).length;
                } else if (row.label.includes('発動率')) {
                    const u = combo.filter(s => s.star === star && !isEx(s.name)).length;
                    const o = os.filter(s => s.star === star && !isEx(s.name)).length;
                    val = o > 0 ? (u / o * 100).toFixed(2) + '%' : '0.00%';
                }
            } else if (row.type === 'owned') {
                val = os.filter(s => `${s.name}-${s.star}` === row.key).length || '';
            }
            rowHtml += `<td>${val}</td>`;
        });
        rowHtml += '</tr>';
        html += rowHtml;
    });
    html += '</tbody>';
    table.innerHTML = html;
}
function copyHistoryTSV() {
    const table = document.getElementById('history-table');
    if (!table || table.rows.length === 0) return;
    let tsv = '';
    for (let i = 0; i < table.rows.length; i++) {
        const cells = Array.from(table.rows[i].cells).map(c => c.innerText);
        tsv += cells.join('\t') + '\n';
    }
    navigator.clipboard.writeText(tsv).then(() => alert('コピーしました'));
}

// Export/Import
function exportDefinitions() { downloadJSON(JSON.stringify(whiteSecretDefs, null, 2), "white_secrets.json"); }
function importDefinitions(input) {
    const file = input.files[0]; if (!file) return;
    const r = new FileReader();
    r.onload = e => {
        try {
            const j = JSON.parse(e.target.result);
            if (confirm("インポートしますか？")) { whiteSecretDefs = j; saveDefinitions(); alert("完了"); }
        } catch (err) { alert("エラー"); }
        input.value = '';
    };
    r.readAsText(file);
}

function exportHistoryData() { downloadJSON(JSON.stringify(historyData, null, 2), "history.json"); }
function importHistoryData(input) {
    const file = input.files[0]; if (!file) return;
    const r = new FileReader();
    r.onload = e => {
        try {
            const j = JSON.parse(e.target.result);
            if (confirm("履歴をインポートしますか？（現在の履歴は上書きされます）")) {
                historyData = j;
                saveHistory();
                alert("完了");
            }
        } catch (err) { alert("エラー"); }
        input.value = '';
    };
    r.readAsText(file);
}

function exportFamilyData() { downloadJSON(JSON.stringify(familyData, null, 2), "possessed.json"); }
function importFamilyData(input) {
    const file = input.files[0]; if (!file) return;
    const r = new FileReader();
    r.onload = e => {
        try {
            const j = JSON.parse(e.target.result);
            if (confirm("インポートしますか？")) { familyData = j; saveFamilyData(); alert("完了"); }
        } catch (err) { alert("エラー"); }
        input.value = '';
    };
    r.readAsText(file);
}

function downloadJSON(content, fname) {
    const blob = new Blob([content], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = fname; document.body.appendChild(a); a.click(); document.body.removeChild(a);
}

// ==========================================
// part 3: Solver Logic (JS Version)
// ==========================================

class SolverStopper {
    constructor() { this.stopped = false; }
    stop() { this.stopped = true; }
    isStopped() { return this.stopped; }
}

async function calculate() {
    const btn = document.getElementById('btn-calculate');
    const cancelBtn = document.getElementById('btn-cancel');
    btn.disabled = true; btn.innerText = '計算中...';
    cancelBtn.classList.remove('hidden');

    currentSolverStopper = new SolverStopper();

    // Prepare inputs
    const getVal = (id) => parseFloat(document.getElementById(id).value) || 0;
    const target = {
        life: getVal('target-life'), pow: getVal('target-pow'), int: getVal('target-int'),
        ski: getVal('target-ski'), spd: getVal('target-spd'), def: getVal('target-def'),
        pt: getVal('target-pt'), ratio: getVal('compatibility-ratio') || 1.0
    };
    const blue = {
        life: getVal('blue-life'), pow: getVal('blue-pow'), int: getVal('blue-int'),
        ski: getVal('blue-ski'), spd: getVal('blue-spd'), def: getVal('blue-def')
    };

    // Flatten logic
    const flattenDefs = [];
    whiteSecretDefs.forEach(def => {
        def.rows.forEach(r => {
            flattenDefs.push({
                name: def.name, stat: r.stat, s1: r.s1, s2: r.s2, s3: r.s3,
                pa: r.isPA ? "A" : "", pb: r.isPB ? "B" : "", pc: r.isPC ? "C" : "",
                pd: r.isPD ? "D" : "", pe: r.isPE ? "E" : "", pf: r.isPF ? "F" : ""
            });
        });
    });

    const ownedFlat = [];
    FAMILY_MEMBERS.forEach(m => {
        if (familyData[m]) familyData[m].forEach(item => ownedFlat.push(item));
    });

    // Run Solver (Async wrap just to allow UI to update if needed, but logic is sync)
    // To properly support cancel, we need to iterate or yield? 
    // Implementing purely sync solver. Cancel works if we check it in tight loops.
    // If sync takes too long, browser warns.

    // We will use setTimeout to release thread start.
    setTimeout(() => {
        try {
            const secretMap = buildSecretMap(flattenDefs);
            const ownedPool = buildOwnedPool(ownedFlat, secretMap);
            const neededExact = calculateNeededWhiteExact(target, blue);

            const result = solveExactMatchGrouped(ownedPool, neededExact, currentSolverStopper);

            const formatted = formatResultForDisplay(result, neededExact, ownedPool, target);

            document.getElementById('result-area').classList.remove('hidden');
            if (formatted.html) {
                document.getElementById('result-html').innerHTML = formatted.html;
                addToHistory(formatted, null, ownedFlat);
                document.getElementById('result-text').textContent = '';
            } else {
                document.getElementById('result-text').textContent = formatted.raw || "Result Error";
            }

        } catch (e) {
            console.error(e);
            alert("エラー: " + e.message);
        } finally {
            resetCalcUI();
        }
    }, 50);
}

function cancelCalculation() {
    if (currentSolverStopper) currentSolverStopper.stop();
}

function resetCalcUI() {
    const btn = document.getElementById('btn-calculate');
    const cancelBtn = document.getElementById('btn-cancel');
    btn.disabled = false;
    btn.innerHTML = '<span class="material-icons-round">play_arrow</span> 計算実行';
    cancelBtn.classList.add('hidden');
    currentSolverStopper = null;
}

// --- Algorithm Implementation ---

function buildSecretMap(definitions) {
    const sMap = {};
    const pKeys = ['A', 'B', 'C', 'D', 'E', 'F'];

    definitions.forEach(def => {
        const name = def.name; const stat = def.stat;
        if (!name || !stat) return;

        if (!sMap[name]) sMap[name] = { effects: {}, patterns: { A: {}, B: {}, C: {}, D: {}, E: {}, F: {} } };
        const entry = sMap[name];

        const effs = [def.s1 || 0, def.s2 || 0, def.s3 || 0];
        let hasP = false;

        // Def logic: if pa="A", then pKeys match
        // In python: conflict_def.get("pa") -> "pa" in dict?
        // JS object keys are lower case "pa", "pb" in flattenDefs? Yes.

        // Check which keys are present (non-empty strings)
        pKeys.forEach(pk => {
            const k = "p" + pk.toLowerCase();
            if (def[k]) {
                entry.patterns[pk][stat] = effs;
                hasP = true;
            }
        });

        if (!hasP) entry.effects[stat] = effs;
    });

    // Transform to variations
    const finalMap = {};
    for (const name in sMap) {
        const entry = sMap[name];
        const variations = [];
        const types = pKeys.filter(k => Object.keys(entry.patterns[k]).length > 0);

        if (types.length > 0) {
            types.forEach(k => {
                const combined = JSON.parse(JSON.stringify(entry.effects));
                Object.assign(combined, entry.patterns[k]);
                variations.push(combined);
            });
        } else {
            variations.push(entry.effects);
        }
        finalMap[name] = { variations };
    }
    return finalMap;
}

function buildOwnedPool(ownedRaw, secretMap) {
    const pool = [];
    let uniqueId = 0;
    let originalId = 0;

    ownedRaw.forEach(item => {
        const name = item.name;
        const star = parseInt(item.star);
        if (!secretMap[name] || star < 1 || star > 3) return;

        const vars = secretMap[name].variations;
        const oid = originalId++;

        vars.forEach(v => {
            pool.push({
                id: uniqueId++,
                original_id: oid,
                name: name,
                star: star,
                effects: v
            });
        });
    });
    return pool;
}

const STAT_KEYS = ["life", "pow", "int", "ski", "spd", "def", "pt"];
const STAT_LABELS = ["ライフ", "ちから", "かしこさ", "命中", "回避", "丈夫さ", "能力pt"];

function calculateNeededWhiteExact(target, blue) {
    const needed = {};
    const ratio = target.ratio;

    STAT_KEYS.forEach((key, i) => {
        const label = STAT_LABELS[i];
        const tVal = target[key];
        const bVal = blue[key] || 0; // blue doesn't have pt usually, implies 0

        if (tVal === 0) { needed[label] = 0; return; }

        // Calc
        const base = (tVal / ratio) - bVal;
        const fVal = Math.floor(base);
        const cVal = Math.ceil(base);

        const checkF = (fVal + bVal) * ratio;
        // const checkC = (cVal + bVal) * ratio;

        // EPSILON compare (JS floating point)
        let selected = cVal;
        if (checkF >= tVal - EPSILON && Math.abs(checkF - tVal) <= Math.abs(((cVal + bVal) * ratio) - tVal) + EPSILON) {
            selected = fVal;
        }
        needed[label] = Math.max(0, selected);
    });
    return needed;
}

function solveExactMatchGrouped(ownedPool, neededExact, stopper) {
    // Group Logic
    // 1. Group by Original ID (Physical Items)
    const physicalItems = {};
    ownedPool.forEach(item => {
        const oid = item.original_id;
        if (!physicalItems[oid]) physicalItems[oid] = { name: item.name, star: item.star, variations: [] };
        physicalItems[oid].variations.push(item.effects);
    });

    // 2. Group Identical Physical Items
    // Sig = Name + Star (Assuming identical defs for same name)
    const groupsMap = {};
    for (const oid in physicalItems) {
        const p = physicalItems[oid];
        const sig = `${p.name}-${p.star}`;
        if (!groupsMap[sig]) {
            groupsMap[sig] = { name: p.name, star: p.star, variations: p.variations, count: 0 };
        }
        groupsMap[sig].count++;
    }
    const groups = Object.values(groupsMap);

    // 3. Target Array
    const targetStats = STAT_LABELS.map(s => neededExact[s] || 0);

    // 4. Solve
    const solver = new GroupedSolver(groups, targetStats, stopper);
    const res = solver.solve();

    return res ? { combo: res, perfect: true } : { combo: null };
}

class GroupedSolver {
    constructor(groups, target, stopper) {
        this.groups = groups;
        this.target = target;
        this.stopper = stopper;
        this.numStats = target.length;
        this.numGroups = groups.length;
        this.foundSolution = null;

        // Suffix Max Pruning
        this.suffixMax = Array.from({ length: this.numGroups + 1 }, () => new Array(this.numStats).fill(0));

        for (let i = this.numGroups - 1; i >= 0; i--) {
            const g = this.groups[i];
            const count = g.count;

            // Max per item in group
            const gItemMax = new Array(this.numStats).fill(0);
            g.variations.forEach(effs => {
                const starIdx = g.star - 1;
                STAT_LABELS.forEach((s, sIdx) => {
                    const val = (effs[s] && effs[s][starIdx]) ? effs[s][starIdx] : 0;
                    if (val > gItemMax[sIdx]) gItemMax[sIdx] = val;
                });
            });

            for (let s = 0; s < this.numStats; s++) {
                this.suffixMax[i][s] = this.suffixMax[i + 1][s] + (gItemMax[s] * count);
            }
        }
        this.selections = new Array(this.numGroups).fill(null);
    }

    solve() {
        const currentStats = new Array(this.numStats).fill(0);
        this.backtrack(0, currentStats);
        if (this.foundSolution) return this.reconstruct();
        return null;
    }

    backtrack(gIdx, currentStats) {
        if (this.foundSolution) return;
        if (this.stopper && this.stopper.isStopped()) return;

        // Pruning 1: Exact / Over
        let allMet = true;
        for (let s = 0; s < this.numStats; s++) {
            if (currentStats[s] > this.target[s]) return; // Over
            if (currentStats[s] < this.target[s]) allMet = false;
        }
        if (allMet) { this.foundSolution = true; return; }

        if (gIdx >= this.numGroups) return;

        // Pruning 2: Impossible
        for (let s = 0; s < this.numStats; s++) {
            if (currentStats[s] + this.suffixMax[gIdx][s] < this.target[s]) return;
        }

        const totalCount = this.groups[gIdx].count;
        this.distributeCounts(gIdx, currentStats, 0, totalCount, {});
    }

    distributeCounts(gIdx, currentStats, vIdx, remaining, selection) {
        if (this.foundSolution) return;

        const variations = this.groups[gIdx].variations;

        // Base case
        if (vIdx >= variations.length) {
            this.selections[gIdx] = selection;
            this.backtrack(gIdx + 1, currentStats);
            return;
        }

        // Iterate count for this variation: 0 to remaining
        // Pre-calc effects
        const varEffs = this.getVarEffects(this.groups[gIdx], vIdx);

        for (let c = 0; c <= remaining; c++) {
            if (this.foundSolution) return;

            // Check overflow early?
            const added = varEffs.map(v => v * c);
            let possible = true;
            const nextStats = [];
            for (let s = 0; s < this.numStats; s++) {
                const ns = currentStats[s] + added[s];
                if (ns > this.target[s]) { possible = false; break; }
                nextStats.push(ns);
            }
            if (!possible) break; // Optimization: Assumes positive stats

            const nextSel = Object.assign({}, selection);
            if (c > 0) nextSel[vIdx] = c;

            this.distributeCounts(gIdx, nextStats, vIdx + 1, remaining - c, nextSel);
        }
    }

    getVarEffects(group, vIdx) {
        const effs = group.variations[vIdx];
        const starIdx = group.star - 1;
        return STAT_LABELS.map(s => (effs[s] ? effs[s][starIdx] : 0));
    }

    reconstruct() {
        const combo = [];
        this.selections.forEach((sel, gIdx) => {
            if (!sel) return;
            const g = this.groups[gIdx];
            for (const vIdxStr in sel) {
                const count = sel[vIdxStr];
                const v = parseInt(vIdxStr);
                const variation = g.variations[v];
                for (let k = 0; k < count; k++) {
                    combo.push({
                        name: g.name, star: g.star, effects: variation, original_id: -1
                    });
                }
            }
        });
        return combo;
    }
}

function formatResultForDisplay(result, needed, ownedPool, target) {
    if (!result.combo) {
        return { html: '<div class="error-msg">条件を満たす組み合わせが見つかりませんでした。</div>', raw: 'Not Found' };
    }
    const combo = result.combo;
    const finalEffs = {};
    combo.forEach(item => {
        const si = item.star - 1;
        STAT_LABELS.forEach(s => {
            const v = (item.effects[s] ? item.effects[s][si] : 0);
            finalEffs[s] = (finalEffs[s] || 0) + v;
        });
    });

    let html = '<table border="1" style="border-collapse: collapse;">';
    html += '<thead><tr><th>秘伝名</th><th>★</th>' + STAT_LABELS.map(s => `<th>${s}</th>`).join('') + '</tr></thead><tbody>';

    combo.forEach(item => {
        const si = item.star - 1;
        html += `<tr><td>${item.name}</td><td>${item.star}</td>`;
        STAT_LABELS.forEach(s => {
            const v = (item.effects[s] ? item.effects[s][si] : 0);
            html += `<td>${v}</td>`;
        });
        html += '</tr>';
    });

    html += '<tr style="background:#333; color:white; font-weight:bold;"><td>合計</td><td>-</td>';
    STAT_LABELS.forEach(s => html += `<td>${finalEffs[s] || 0}</td>`);
    html += '</tr>';

    html += '<tr style="background:#444; color:#aaa;"><td>目標</td><td>-</td>';
    STAT_LABELS.forEach(s => html += `<td>${needed[s] || 0}</td>`);
    html += '</tr>';
    html += '</tbody></table>';

    let sum = 0;
    STAT_LABELS.forEach((s, i) => {
        if (s !== '能力pt') {
            const k = STAT_KEYS[i];
            sum += (parseFloat(document.getElementById('target-' + k).value) || 0);
        }
    });

    return { html: html, combo: combo, actualStatSum: sum };
}
