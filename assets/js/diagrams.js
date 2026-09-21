/**
 * Backend Architecture Diagrams Interactivity
 * Portfolio: Nguyễn Lê Anh Phú — Backend Software Engineer
 */

document.addEventListener('DOMContentLoaded', () => {
  initDiagramInteractivity();
});

function initDiagramInteractivity() {
  const nodes = document.querySelectorAll('.arch-node');

  nodes.forEach(node => {
    node.addEventListener('mouseenter', handleNodeEnter);
    node.addEventListener('focus', handleNodeEnter);
    node.addEventListener('click', handleNodeEnter);
  });
}

function handleNodeEnter(e) {
  const node = e.currentTarget;
  const container = node.closest('.diagram-container');
  if (!container) return;

  const tooltip = container.querySelector('.diagram-tooltip');
  if (!tooltip) return;

  const nodeName = node.getAttribute('data-node') || 'NODE';
  const nodeRole = node.getAttribute('data-role') || 'Active Subsystem';
  const nodeLatency = node.getAttribute('data-latency') || '< 10ms';
  const nodeTech = node.getAttribute('data-tech') || 'Distributed';

  tooltip.innerHTML = `<span>${nodeName}</span> &mdash; ${nodeRole} | <span style="color: var(--accent-success)">${nodeLatency}</span> [${nodeTech}]`;
}
