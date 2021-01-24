/**
 * @author Mark Kellogg - http://www.github.com/mkkellogg
 * additions by Benjamin Cid Pérez
 */

//=======================================
// Trail Renderer
//=======================================

THREE.TrailRenderer = function(scene, orientToMovement) {

    THREE.Object3D.call(this);

    this.active = false;

    this.orientToMovement = false;
    if (orientToMovement) this.orientToMovement = true;

    this.scene = scene;

    this.geometry = null;
    this.mesh = null;
    this.nodeCenters = null;

    this.lastNodeCenter = null;
    this.currentNodeCenter = null;
    this.lastOrientationDir = null;
    this.nodeIDs = null;
    this.currentLength = 0;
    this.currentEnd = 0;
    this.currentNodeID = 0;

}

THREE.TrailRenderer.prototype = Object.create(THREE.Object3D.prototype);
THREE.TrailRenderer.prototype.constructor = THREE.TrailRenderer;

THREE.TrailRenderer.MaxHeadVertices = 128;
THREE.TrailRenderer.LocalOrientationTangent = new THREE.Vector3(1, 0, 0);
THREE.TrailRenderer.LocalOrientationDirection = new THREE.Vector3(0, 0, -1);
THREE.TrailRenderer.LocalHeadOrigin = new THREE.Vector3(0, 0, 0);
THREE.TrailRenderer.PositionComponentCount = 3;
THREE.TrailRenderer.UVComponentCount = 2;
THREE.TrailRenderer.IndicesPerFace = 3;
THREE.TrailRenderer.FacesPerQuad = 2;


THREE.TrailRenderer.Shader = {};

THREE.TrailRenderer.Shader.BaseVertexVars = [

    "attribute float nodeID;",
    "attribute float nodeVertexID;",
    "attribute vec3 nodeCenter;",

    "uniform float minID;",
    "uniform float maxID;",
    "uniform float trailLength;",
    "uniform float maxTrailLength;",
    "uniform float verticesPerNode;",
    "uniform vec2 textureTileFactor;",

    "uniform vec4 headColor;",
    "uniform vec4 tailColor;",

    "varying vec4 vColor;",

].join("\n");

THREE.TrailRenderer.Shader.TexturedVertexVars = [

    THREE.TrailRenderer.Shader.BaseVertexVars,
    "varying vec2 vUV;",
    "uniform float dragTexture;",

].join("\n");

THREE.TrailRenderer.Shader.BaseFragmentVars = [

    "varying vec4 vColor;",
    "uniform sampler2D texture;",

].join("\n");

THREE.TrailRenderer.Shader.TexturedFragmentVars = [

    THREE.TrailRenderer.Shader.BaseFragmentVars,
    "varying vec2 vUV;"

].join("\n");


THREE.TrailRenderer.Shader.VertexShaderCore = [

    "float fraction = ( maxID - nodeID ) / ( maxID - minID );",
    "vColor = ( 1.0 - fraction ) * headColor + fraction * tailColor;",
    "vec4 realPosition = vec4( ( 1.0 - fraction ) * position.xyz + fraction * nodeCenter.xyz, 1.0 ); ",

].join("\n");

THREE.TrailRenderer.Shader.BaseVertexShader = [

    THREE.TrailRenderer.Shader.BaseVertexVars,

    "void main() { ",

    THREE.TrailRenderer.Shader.VertexShaderCore,
    "gl_Position = projectionMatrix * viewMatrix * realPosition;",

    "}"

].join("\n");

THREE.TrailRenderer.Shader.BaseFragmentShader = [

    THREE.TrailRenderer.Shader.BaseFragmentVars,

    "void main() { ",

    "gl_FragColor = vColor;",

    "}"

].join("\n");

THREE.TrailRenderer.Shader.TexturedVertexShader = [

    THREE.TrailRenderer.Shader.TexturedVertexVars,

    "void main() { ",

    THREE.TrailRenderer.Shader.VertexShaderCore,
    "float s = 0.0;",
    "float t = 0.0;",
    "if ( dragTexture == 1.0 ) { ",
    "   s = fraction *  textureTileFactor.s; ",
    " 	t = ( nodeVertexID / verticesPerNode ) * textureTileFactor.t;",
    "} else { ",
    "	s = nodeID / maxTrailLength * textureTileFactor.s;",
    " 	t = ( nodeVertexID / verticesPerNode ) * textureTileFactor.t;",
    "}",
    "vUV = vec2( s, t ); ",
    "gl_Position = projectionMatrix * viewMatrix * realPosition;",

    "}"

].join("\n");

THREE.TrailRenderer.Shader.TexturedFragmentShader = [

    THREE.TrailRenderer.Shader.TexturedFragmentVars,

    "void main() { ",

    "vec4 textureColor = texture2D( texture, vUV );",
    "gl_FragColor = vColor * textureColor;",

    "}"

].join("\n");

THREE.TrailRenderer.createMaterial = function(vertexShader, fragmentShader, customUniforms) {

    customUniforms = customUniforms || {};

    customUniforms.trailLength = {
        type: "f",
        value: null
    };
    customUniforms.verticesPerNode = {
        type: "f",
        value: null
    };
    customUniforms.minID = {
        type: "f",
        value: null
    };
    customUniforms.maxID = {
        type: "f",
        value: null
    };
    customUniforms.dragTexture = {
        type: "f",
        value: null
    };
    customUniforms.maxTrailLength = {
        type: "f",
        value: null
    };
    customUniforms.textureTileFactor = {
        type: "v2",
        value: null
    };

    customUniforms.headColor = {
        type: "v4",
        value: new THREE.Vector4()
    };
    customUniforms.tailColor = {
        type: "v4",
        value: new THREE.Vector4()
    };

    vertexShader = vertexShader || THREE.TrailRenderer.Shader.BaseVertexShader;
    fragmentShader = fragmentShader || THREE.TrailRenderer.Shader.BaseFragmentShader;

    return new THREE.ShaderMaterial({
        uniforms: customUniforms,
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,

        transparent: true,
        alphaTest: 0.1,

        blending: THREE.AdditiveBlending,
        //		blendSrc: THREE.SrcAlphaFactor,
        //		blendDst: THREE.OneMinusSrcAlphaFactor,
        //		blendEquation: THREE.AddEquation,


        depthTest: true,
        depthWrite: false,

        side: THREE.DoubleSide
    });

}

THREE.TrailRenderer.createBaseMaterial = function(customUniforms) {

    return this.createMaterial(THREE.TrailRenderer.Shader.BaseVertexShader, THREE.TrailRenderer.Shader.BaseFragmentShader, customUniforms);

}

THREE.TrailRenderer.createTexturedMaterial = function(customUniforms) {

    customUniforms = {};
    customUniforms.texture = {
        type: "t",
        value: null
    };

    return this.createMaterial(THREE.TrailRenderer.Shader.TexturedVertexShader, THREE.TrailRenderer.Shader.TexturedFragmentShader, customUniforms);

}

THREE.TrailRenderer.prototype.initialize = function(material, length, dragTexture, localHeadWidth, localHeadGeometry, targetObject) {

    this.deactivate();
    this.destroyMesh();

    this.length = (length > 0) ? length + 1 : 0;
    this.dragTexture = (!dragTexture) ? 0 : 1;
    this.targetObject = targetObject;

    this.initializeLocalHeadGeometry(localHeadWidth, localHeadGeometry);

    this.nodeIDs = [];
    this.nodeCenters = [];

    for (var i = 0; i < this.length; i++) {

        this.nodeIDs[i] = -1;
        this.nodeCenters[i] = new THREE.Vector3();

    }

    this.material = material;

    this.initializeGeometry();
    this.initializeMesh();

    this.material.uniforms.trailLength.value = 0;
    this.material.uniforms.minID.value = 0;
    this.material.uniforms.maxID.value = 0;
    this.material.uniforms.dragTexture.value = this.dragTexture;
    this.material.uniforms.maxTrailLength.value = this.length;
    this.material.uniforms.verticesPerNode.value = this.VerticesPerNode;
    this.material.uniforms.textureTileFactor.value = new THREE.Vector2(1.0, 1.0);

    this.reset();

}

THREE.TrailRenderer.prototype.initializeLocalHeadGeometry = function(localHeadWidth, localHeadGeometry) {

    this.localHeadGeometry = [];

    if (!localHeadGeometry) {

        var halfWidth = localHeadWidth || 1.0;
        halfWidth = halfWidth / 2.0;

        this.localHeadGeometry.push(new THREE.Vector3(-halfWidth, 0, 0));
        this.localHeadGeometry.push(new THREE.Vector3(halfWidth, 0, 0));

        this.VerticesPerNode = 2;

    } else {

        this.VerticesPerNode = 0;
        for (var i = 0; i < localHeadGeometry.length && i < THREE.TrailRenderer.MaxHeadVertices; i++) {

            var vertex = localHeadGeometry[i];

            if (vertex && vertex instanceof THREE.Vector3) {

                var vertexCopy = new THREE.Vector3();

                vertexCopy.copy(vertex);

                this.localHeadGeometry.push(vertexCopy);
                this.VerticesPerNode++;

            }

        }

    }

    this.FacesPerNode = (this.VerticesPerNode - 1) * 2;
    this.FaceIndicesPerNode = this.FacesPerNode * 3;

}

THREE.TrailRenderer.prototype.initializeGeometry = function() {

    this.vertexCount = this.length * this.VerticesPerNode;
    this.faceCount = this.length * this.FacesPerNode;

    var geometry = new THREE.BufferGeometry();

    var nodeIDs = new Float32Array(this.vertexCount);
    var nodeVertexIDs = new Float32Array(this.vertexCount * this.VerticesPerNode);
    var positions = new Float32Array(this.vertexCount * THREE.TrailRenderer.PositionComponentCount);
    var nodeCenters = new Float32Array(this.vertexCount * THREE.TrailRenderer.PositionComponentCount);
    var uvs = new Float32Array(this.vertexCount * THREE.TrailRenderer.UVComponentCount);
    var indices = new Uint32Array(this.faceCount * THREE.TrailRenderer.IndicesPerFace);

    var nodeIDAttribute = new THREE.BufferAttribute(nodeIDs, 1);
    nodeIDAttribute.setDynamic(true);
    geometry.addAttribute('nodeID', nodeIDAttribute);

    var nodeVertexIDAttribute = new THREE.BufferAttribute(nodeVertexIDs, 1);
    nodeVertexIDAttribute.setDynamic(true);
    geometry.addAttribute('nodeVertexID', nodeVertexIDAttribute);

    var nodeCenterAttribute = new THREE.BufferAttribute(nodeCenters, THREE.TrailRenderer.PositionComponentCount);
    nodeCenterAttribute.setDynamic(true);
    geometry.addAttribute('nodeCenter', nodeCenterAttribute);

    var positionAttribute = new THREE.BufferAttribute(positions, THREE.TrailRenderer.PositionComponentCount);
    positionAttribute.setDynamic(true);
    geometry.addAttribute('position', positionAttribute);

    var uvAttribute = new THREE.BufferAttribute(uvs, THREE.TrailRenderer.UVComponentCount);
    uvAttribute.setDynamic(true);
    geometry.addAttribute('uv', uvAttribute);

    var indexAttribute = new THREE.BufferAttribute(indices, 1);
    indexAttribute.setDynamic(true);
    geometry.setIndex(indexAttribute);

    this.geometry = geometry;

}

THREE.TrailRenderer.prototype.zeroVertices = function() {

    var positions = this.geometry.getAttribute('position');

    for (var i = 0; i < this.vertexCount; i++) {

        var index = i * 3;

        positions.array[index] = 0;
        positions.array[index + 1] = 0;
        positions.array[index + 2] = 0;

    }

    positions.needsUpdate = true;
    positions.updateRange.count = -1;

}

THREE.TrailRenderer.prototype.zeroIndices = function() {

    var indices = this.geometry.getIndex();

    for (var i = 0; i < this.faceCount; i++) {

        var index = i * 3;

        indices.array[index] = 0;
        indices.array[index + 1] = 0;
        indices.array[index + 2] = 0;

    }

    indices.needsUpdate = true;
    indices.updateRange.count = -1;

}

THREE.TrailRenderer.prototype.formInitialFaces = function() {

    this.zeroIndices();

    var indices = this.geometry.getIndex();

    for (var i = 0; i < this.length - 1; i++) {

        this.connectNodes(i, i + 1);

    }

    indices.needsUpdate = true;
    indices.updateRange.count = -1;

}

THREE.TrailRenderer.prototype.initializeMesh = function() {

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.frustumCulled = false;
    this.mesh.dynamic = true;
    this.mesh.matrixAutoUpdate = false;

}

THREE.TrailRenderer.prototype.destroyMesh = function() {

    if (this.mesh) {

        this.scene.remove(this.mesh);
        this.mesh = null;

    }

}

THREE.TrailRenderer.prototype.reset = function() {

    this.currentLength = 0;
    this.currentEnd = -1;

    this.lastNodeCenter = null;
    this.currentNodeCenter = null;
    this.lastOrientationDir = null;

    this.currentNodeID = 0;

    this.formInitialFaces();
    this.zeroVertices();

    this.geometry.setDrawRange(0, 0);

}

THREE.TrailRenderer.prototype.updateUniforms = function() {

    if (this.currentLength < this.length) {

        this.material.uniforms.minID.value = 0;

    } else {

        this.material.uniforms.minID.value = this.currentNodeID - this.length;

    }
    this.material.uniforms.maxID.value = this.currentNodeID;
    this.material.uniforms.trailLength.value = this.currentLength;
    this.material.uniforms.maxTrailLength.value = this.length;
    this.material.uniforms.verticesPerNode.value = this.VerticesPerNode;

}

THREE.TrailRenderer.prototype.advance = function() {

    var orientationTangent = new THREE.Vector3();
    var position = new THREE.Vector3();
    var offset = new THREE.Vector3();
    var tempMatrix4 = new THREE.Matrix4();

    return function advance() {

        //this.targetObject.updateMatrixWorld();
        tempMatrix4.copy(this.targetObject.matrixWorld);

        this.advanceWithTransform(tempMatrix4);

        this.updateUniforms();
    }

}();

THREE.TrailRenderer.prototype.advanceWithPositionAndOrientation = function(nextPosition, orientationTangent) {

    this.advanceGeometry({
        position: nextPosition,
        tangent: orientationTangent
    }, null);

}

THREE.TrailRenderer.prototype.advanceWithTransform = function(transformMatrix) {

    this.advanceGeometry(null, transformMatrix);

}

THREE.TrailRenderer.prototype.advanceGeometry = function() {

    var direction = new THREE.Vector3();
    var tempPosition = new THREE.Vector3();

    return function advanceGeometry(positionAndOrientation, transformMatrix) {

        var nextIndex = this.currentEnd + 1 >= this.length ? 0 : this.currentEnd + 1;

        if (transformMatrix) {

            this.updateNodePositionsFromTransformMatrix(nextIndex, transformMatrix);

        } else {

            this.updateNodePositionsFromOrientationTangent(nextIndex, positionAndOrientation.position, positionAndOrientation.tangent);
        }

        if (this.currentLength >= 1) {

            var connectRange = this.connectNodes(this.currentEnd, nextIndex);
            var disconnectRange = null;

            if (this.currentLength >= this.length) {

                var disconnectIndex = this.currentEnd + 1 >= this.length ? 0 : this.currentEnd + 1;
                disconnectRange = this.disconnectNodes(disconnectIndex);

            }

            //this.updateIndexRangesForConnectAndDisconnect(connectRange, disconnectRange);

        }

        if (this.currentLength < this.length) {

            this.currentLength++;

        }

        this.currentEnd++;
        if (this.currentEnd >= this.length) {

            this.currentEnd = 0;

        }

        if (this.currentLength >= 1) {

            if (this.currentLength < this.length) {

                this.geometry.setDrawRange(0, (this.currentLength - 1) * this.FaceIndicesPerNode);

            } else {

                this.geometry.setDrawRange(0, this.currentLength * this.FaceIndicesPerNode);

            }

        }

        this.updateNodeID(this.currentEnd, this.currentNodeID);
        this.currentNodeID++;
    }

}();

THREE.TrailRenderer.prototype.updateHead = function() {

    var tempMatrix4 = new THREE.Matrix4();

    return function advance() {

        if (this.currentEnd < 0) return;

        //this.targetObject.updateMatrixWorld();
        tempMatrix4.copy(this.targetObject.matrixWorld);

        this.updateNodePositionsFromTransformMatrix(this.currentEnd, tempMatrix4);
    }

}();

THREE.TrailRenderer.prototype.updateNodeID = function(nodeIndex, id) {

    this.nodeIDs[nodeIndex] = id;

    var nodeIDs = this.geometry.getAttribute('nodeID');
    var nodeVertexIDs = this.geometry.getAttribute('nodeVertexID');

    for (var i = 0; i < this.VerticesPerNode; i++) {

        var baseIndex = nodeIndex * this.VerticesPerNode + i;
        nodeIDs.array[baseIndex] = id;
        nodeVertexIDs.array[baseIndex] = i;

    }

    nodeIDs.needsUpdate = true;
    nodeVertexIDs.needsUpdate = true;

    nodeIDs.updateRange.offset = nodeIndex * this.VerticesPerNode;
    nodeIDs.updateRange.count = this.VerticesPerNode;

    nodeVertexIDs.updateRange.offset = nodeIndex * this.VerticesPerNode;
    nodeVertexIDs.updateRange.count = this.VerticesPerNode;

}

THREE.TrailRenderer.prototype.updateNodeCenter = function(nodeIndex, nodeCenter) {

    this.lastNodeCenter = this.currentNodeCenter;

    this.currentNodeCenter = this.nodeCenters[nodeIndex];
    this.currentNodeCenter.copy(nodeCenter);

    var nodeCenters = this.geometry.getAttribute('nodeCenter');

    for (var i = 0; i < this.VerticesPerNode; i++) {

        var baseIndex = (nodeIndex * this.VerticesPerNode + i) * 3;
        nodeCenters.array[baseIndex] = nodeCenter.x;
        nodeCenters.array[baseIndex + 1] = nodeCenter.y;
        nodeCenters.array[baseIndex + 2] = nodeCenter.z;

    }

    nodeCenters.needsUpdate = true;

    nodeCenters.updateRange.offset = nodeIndex * this.VerticesPerNode * THREE.TrailRenderer.PositionComponentCount;
    nodeCenters.updateRange.count = this.VerticesPerNode * THREE.TrailRenderer.PositionComponentCount;

}

THREE.TrailRenderer.prototype.updateNodePositionsFromOrientationTangent = function() {

    var tempMatrix4 = new THREE.Matrix4();
    var tempQuaternion = new THREE.Quaternion();
    var tempOffset = new THREE.Vector3();
    var tempLocalHeadGeometry = [];

    for (var i = 0; i < THREE.TrailRenderer.MaxHeadVertices; i++) {

        var vertex = new THREE.Vector3();
        tempLocalHeadGeometry.push(vertex);

    }

    return function updateNodePositionsFromOrientationTangent(nodeIndex, nodeCenter, orientationTangent) {

        var positions = this.geometry.getAttribute('position');

        this.updateNodeCenter(nodeIndex, nodeCenter);

        tempOffset.copy(nodeCenter);
        tempOffset.sub(THREE.TrailRenderer.LocalHeadOrigin);
        tempQuaternion.setFromUnitVectors(THREE.TrailRenderer.LocalOrientationTangent, orientationTangent);

        for (var i = 0; i < this.localHeadGeometry.length; i++) {

            var vertex = tempLocalHeadGeometry[i];
            vertex.copy(this.localHeadGeometry[i]);
            vertex.applyQuaternion(tempQuaternion);
            vertex.add(tempOffset);
        }

        for (var i = 0; i < this.localHeadGeometry.length; i++) {

            var positionIndex = ((this.VerticesPerNode * nodeIndex) + i) * THREE.TrailRenderer.PositionComponentCount;
            var transformedHeadVertex = tempLocalHeadGeometry[i];

            positions.array[positionIndex] = transformedHeadVertex.x;
            positions.array[positionIndex + 1] = transformedHeadVertex.y;
            positions.array[positionIndex + 2] = transformedHeadVertex.z;

        }

        positions.needsUpdate = true;

    }

}();

THREE.TrailRenderer.prototype.updateNodePositionsFromTransformMatrix = function() {

    var tempMatrix4 = new THREE.Matrix4();
    var tempMatrix3 = new THREE.Matrix3();
    var tempQuaternion = new THREE.Quaternion();
    var tempPosition = new THREE.Vector3();
    var tempOffset = new THREE.Vector3();
    var worldOrientation = new THREE.Vector3();
    var tempDirection = new THREE.Vector3();

    var tempLocalHeadGeometry = [];
    for (var i = 0; i < THREE.TrailRenderer.MaxHeadVertices; i++) {

        var vertex = new THREE.Vector3();
        tempLocalHeadGeometry.push(vertex);

    }

    function getMatrix3FromMatrix4(matrix3, matrix4) {

        var e = matrix4.elements;
        matrix3.set(e[0], e[1], e[2],
            e[4], e[5], e[6],
            e[8], e[9], e[10]);

    }

    return function updateNodePositionsFromTransformMatrix(nodeIndex, transformMatrix) {

        var positions = this.geometry.getAttribute('position');

        tempPosition.set(0, 0, 0);
        tempPosition.applyMatrix4(transformMatrix);
        this.updateNodeCenter(nodeIndex, tempPosition);

        for (var i = 0; i < this.localHeadGeometry.length; i++) {

            var vertex = tempLocalHeadGeometry[i];
            vertex.copy(this.localHeadGeometry[i]);

        }

        for (var i = 0; i < this.localHeadGeometry.length; i++) {

            var vertex = tempLocalHeadGeometry[i];
            vertex.applyMatrix4(transformMatrix);

        }

        if (this.lastNodeCenter && this.orientToMovement) {

            getMatrix3FromMatrix4(tempMatrix3, transformMatrix);
            worldOrientation.set(0, 0, -1);
            worldOrientation.applyMatrix3(tempMatrix3);

            tempDirection.copy(this.currentNodeCenter);
            tempDirection.sub(this.lastNodeCenter);
            tempDirection.normalize();

            if (tempDirection.lengthSq() <= .0001 && this.lastOrientationDir) {

                tempDirection.copy(this.lastOrientationDir);
            }

            if (tempDirection.lengthSq() > .0001) {

                if (!this.lastOrientationDir) this.lastOrientationDir = new THREE.Vector3();

                tempQuaternion.setFromUnitVectors(worldOrientation, tempDirection);

                tempOffset.copy(this.currentNodeCenter);

                for (var i = 0; i < this.localHeadGeometry.length; i++) {

                    var vertex = tempLocalHeadGeometry[i];
                    vertex.sub(tempOffset);
                    vertex.applyQuaternion(tempQuaternion);
                    vertex.add(tempOffset);

                }
            }

        }

        for (var i = 0; i < this.localHeadGeometry.length; i++) {

            var positionIndex = ((this.VerticesPerNode * nodeIndex) + i) * THREE.TrailRenderer.PositionComponentCount;
            var transformedHeadVertex = tempLocalHeadGeometry[i];

            positions.array[positionIndex] = transformedHeadVertex.x;
            positions.array[positionIndex + 1] = transformedHeadVertex.y;
            positions.array[positionIndex + 2] = transformedHeadVertex.z;

        }

        positions.needsUpdate = true;

        positions.updateRange.offset = nodeIndex * this.VerticesPerNode * THREE.TrailRenderer.PositionComponentCount;
        positions.updateRange.count = this.VerticesPerNode * THREE.TrailRenderer.PositionComponentCount;
    }

}();

THREE.TrailRenderer.prototype.connectNodes = function() {

    var returnObj = {

        "attribute": null,
        "offset": 0,
        "count": -1

    };

    return function connectNodes(srcNodeIndex, destNodeIndex) {

        var indices = this.geometry.getIndex();

        for (var i = 0; i < this.localHeadGeometry.length - 1; i++) {

            var srcVertexIndex = (this.VerticesPerNode * srcNodeIndex) + i;
            var destVertexIndex = (this.VerticesPerNode * destNodeIndex) + i;

            var faceIndex = ((srcNodeIndex * this.FacesPerNode) + (i * THREE.TrailRenderer.FacesPerQuad)) * THREE.TrailRenderer.IndicesPerFace;

            indices.array[faceIndex] = srcVertexIndex;
            indices.array[faceIndex + 1] = destVertexIndex;
            indices.array[faceIndex + 2] = srcVertexIndex + 1;

            indices.array[faceIndex + 3] = destVertexIndex;
            indices.array[faceIndex + 4] = destVertexIndex + 1;
            indices.array[faceIndex + 5] = srcVertexIndex + 1;

        }

        indices.needsUpdate = true;
        indices.updateRange.count = -1;

        returnObj.attribute = indices;
        returnObj.offset = srcNodeIndex * this.FacesPerNode * THREE.TrailRenderer.IndicesPerFace;
        returnObj.count = this.FacesPerNode * THREE.TrailRenderer.IndicesPerFace;

        return returnObj;

    }
}();

THREE.TrailRenderer.prototype.disconnectNodes = function(srcNodeIndex) {

    var returnObj = {

        "attribute": null,
        "offset": 0,
        "count": -1

    };

    return function disconnectNodes(srcNodeIndex) {

        var indices = this.geometry.getIndex();

        for (var i = 0; i < this.localHeadGeometry.length - 1; i++) {

            var srcVertexIndex = (this.VerticesPerNode * srcNodeIndex) + i;

            var faceIndex = ((srcNodeIndex * this.FacesPerNode) + (i * THREE.TrailRenderer.FacesPerQuad)) * THREE.TrailRenderer.IndicesPerFace;

            indices.array[faceIndex] = 0;
            indices.array[faceIndex + 1] = 0;
            indices.array[faceIndex + 2] = 0;

            indices.array[faceIndex + 3] = 0;
            indices.array[faceIndex + 4] = 0;
            indices.array[faceIndex + 5] = 0;

        }

        indices.needsUpdate = true;
        indices.updateRange.count = -1;

        returnObj.attribute = indices;
        returnObj.offset = srcNodeIndex * this.FacesPerNode * THREE.TrailRenderer.IndicesPerFace;
        returnObj.count = this.FacesPerNode * THREE.TrailRenderer.IndicesPerFace;

        return returnObj;

    }

}();

THREE.TrailRenderer.prototype.updateIndexRangesForConnectAndDisconnect = function(connectRange, disconnectRange) {

    var indexAttribute = connectRange.attribute;

    if (!disconnectRange) {

        indexAttribute.offset = connectRange.offset;
        indexAttribute.count = connectRange.count;


    } else {

        if (connectRange.offset + connectRange.count == disconnectRange.offset) {

            indexAttribute.offset = connectRange.offset;
            indexAttribute.count = connectRange.count;

        } else {

            indexAttribute.offset = 0;
            indexAttribute.count = -1;

        }
    }

}

THREE.TrailRenderer.prototype.deactivate = function() {

    if (this.isActive) {

        this.scene.remove(this.mesh);
        this.isActive = false;

    }

}

THREE.TrailRenderer.prototype.activate = function() {

    if (!this.isActive) {

        this.scene.add(this.mesh);
        this.isActive = true;

    }

}

/*

 shader-particle-engine 1.0.5

 (c) 2015 Luke Moody (http://www.github.com/squarefeet)
 Originally based on Lee Stemkoski's original work (https://github.com/stemkoski/stemkoski.github.com/blob/master/Three.js/js/ParticleEngine.js).
 shader-particle-engine may be freely distributed under the MIT license (See LICENSE at root of this repository.)
 License
 Copyright (C) 2015 Luke Moody

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
var SPE = {
    distributions: {
        BOX: 1,
        SPHERE: 2,
        DISC: 3
    },
    valueOverLifetimeLength: 4
};
"function" === typeof define && define.amd ? define("spe", SPE) : "undefined" !== typeof exports && "undefined" !== typeof module && (module.exports = SPE);
SPE.TypedArrayHelper = function(a, b, c, d) {
    this.componentSize = c || 1;
    this.size = b || 1;
    this.TypedArrayConstructor = a || Float32Array;
    this.array = new a(b * this.componentSize);
    this.indexOffset = d || 0
};
SPE.TypedArrayHelper.constructor = SPE.TypedArrayHelper;
SPE.TypedArrayHelper.prototype.setSize = function(a, b) {
    var c = this.array.length;
    b || (a *= this.componentSize);
    if (a < c) return this.shrink(a);
    if (a > c) return this.grow(a);
    console.info("TypedArray is already of size:", a + ".", "Will not resize.")
};
SPE.TypedArrayHelper.prototype.shrink = function(a) {
    this.array = this.array.subarray(0, a);
    this.size = a;
    return this
};
SPE.TypedArrayHelper.prototype.grow = function(a) {
    var b = this.array,
        c = new this.TypedArrayConstructor(a);
    c.set(b);
    this.array = c;
    this.size = a;
    return this
};
SPE.TypedArrayHelper.prototype.splice = function(a, b) {
    a *= this.componentSize;
    b *= this.componentSize;
    for (var c = [], d = this.array, e = d.length, f = 0; f < e; ++f)(f < a || f >= b) && c.push(d[f]);
    this.setFromArray(0, c);
    return this
};
SPE.TypedArrayHelper.prototype.setFromArray = function(a, b) {
    var c = a + b.length;
    c > this.array.length ? this.grow(c) : c < this.array.length && this.shrink(c);
    this.array.set(b, this.indexOffset + a);
    return this
};
SPE.TypedArrayHelper.prototype.setVec2 = function(a, b) {
    return this.setVec2Components(a, b.x, b.y)
};
SPE.TypedArrayHelper.prototype.setVec2Components = function(a, b, c) {
    var d = this.array;
    a = this.indexOffset + a * this.componentSize;
    d[a] = b;
    d[a + 1] = c;
    return this
};
SPE.TypedArrayHelper.prototype.setVec3 = function(a, b) {
    return this.setVec3Components(a, b.x, b.y, b.z)
};
SPE.TypedArrayHelper.prototype.setVec3Components = function(a, b, c, d) {
    var e = this.array;
    a = this.indexOffset + a * this.componentSize;
    e[a] = b;
    e[a + 1] = c;
    e[a + 2] = d;
    return this
};
SPE.TypedArrayHelper.prototype.setVec4 = function(a, b) {
    return this.setVec4Components(a, b.x, b.y, b.z, b.w)
};
SPE.TypedArrayHelper.prototype.setVec4Components = function(a, b, c, d, e) {
    var f = this.array;
    a = this.indexOffset + a * this.componentSize;
    f[a] = b;
    f[a + 1] = c;
    f[a + 2] = d;
    f[a + 3] = e;
    return this
};
SPE.TypedArrayHelper.prototype.setMat3 = function(a, b) {
    return this.setFromArray(this.indexOffset + a * this.componentSize, b.elements)
};
SPE.TypedArrayHelper.prototype.setMat4 = function(a, b) {
    return this.setFromArray(this.indexOffset + a * this.componentSize, b.elements)
};
SPE.TypedArrayHelper.prototype.setColor = function(a, b) {
    return this.setVec3Components(a, b.r, b.g, b.b)
};
SPE.TypedArrayHelper.prototype.setNumber = function(a, b) {
    this.array[this.indexOffset + a * this.componentSize] = b;
    return this
};
SPE.TypedArrayHelper.prototype.getValueAtIndex = function(a) {
    return this.array[this.indexOffset + a]
};
SPE.TypedArrayHelper.prototype.getComponentValueAtIndex = function(a) {
    return this.array.subarray(this.indexOffset + a * this.componentSize)
};
SPE.ShaderAttribute = function(a, b, c) {
    var d = SPE.ShaderAttribute.typeSizeMap;
    this.type = "string" === typeof a && d.hasOwnProperty(a) ? a : "f";
    this.componentSize = d[this.type];
    this.arrayType = c || Float32Array;
    this.bufferAttribute = this.typedArray = null;
    this.dynamicBuffer = !!b;
    this.updateMax = this.updateMin = 0
};
SPE.ShaderAttribute.constructor = SPE.ShaderAttribute;
SPE.ShaderAttribute.typeSizeMap = {
    f: 1,
    v2: 2,
    v3: 3,
    v4: 4,
    c: 3,
    m3: 9,
    m4: 16
};
SPE.ShaderAttribute.prototype.setUpdateRange = function(a, b) {
    this.updateMin = Math.min(a * this.componentSize, this.updateMin * this.componentSize);
    this.updateMax = Math.max(b * this.componentSize, this.updateMax * this.componentSize)
};
SPE.ShaderAttribute.prototype.flagUpdate = function() {
    var a = this.bufferAttribute,
        b = a.updateRange;
    b.offset = this.updateMin;
    b.count = Math.min(this.updateMax - this.updateMin + this.componentSize, this.typedArray.array.length);
    a.needsUpdate = !0
};
SPE.ShaderAttribute.prototype.resetUpdateRange = function() {
    this.updateMax = this.updateMin = 0
};
SPE.ShaderAttribute.prototype.resetDynamic = function() {
    this.bufferAttribute.dynamic = this.dynamicBuffer
};
SPE.ShaderAttribute.prototype.splice = function(a, b) {
    this.typedArray.splice(a, b);
    this.forceUpdateAll()
};
SPE.ShaderAttribute.prototype.forceUpdateAll = function() {
    this.bufferAttribute.array = this.typedArray.array;
    this.bufferAttribute.updateRange.offset = 0;
    this.bufferAttribute.updateRange.count = -1;
    this.bufferAttribute.dynamic = !1;
    this.bufferAttribute.needsUpdate = !0
};
SPE.ShaderAttribute.prototype._ensureTypedArray = function(a) {
    if (null === this.typedArray || this.typedArray.size !== a * this.componentSize) null !== this.typedArray && this.typedArray.size !== a ? this.typedArray.setSize(a) : null === this.typedArray && (this.typedArray = new SPE.TypedArrayHelper(this.arrayType, a, this.componentSize))
};
SPE.ShaderAttribute.prototype._createBufferAttribute = function(a) {
    this._ensureTypedArray(a);
    null !== this.bufferAttribute ? (this.bufferAttribute.array = this.typedArray.array, this.bufferAttribute.needsUpdate = !0) : (this.bufferAttribute = new THREE.BufferAttribute(this.typedArray.array, this.componentSize), this.bufferAttribute.dynamic = this.dynamicBuffer)
};
SPE.ShaderAttribute.prototype.getLength = function() {
    return null === this.typedArray ? 0 : this.typedArray.array.length
};
SPE.shaderChunks = {
    defines: "#define PACKED_COLOR_SIZE 256.0\n#define PACKED_COLOR_DIVISOR 255.0",
    uniforms: "uniform float deltaTime;\nuniform float runTime;\nuniform sampler2D texture;\nuniform vec4 textureAnimation;\nuniform float scale;",
    attributes: "attribute vec4 acceleration;\nattribute vec3 velocity;\nattribute vec4 rotation;\nattribute vec3 rotationCenter;\nattribute vec4 params;\nattribute vec4 size;\nattribute vec4 angle;\nattribute vec4 color;\nattribute vec4 opacity;",
    varyings: "varying vec4 vColor;\n#ifdef SHOULD_ROTATE_TEXTURE\n    varying float vAngle;\n#endif\n#ifdef SHOULD_CALCULATE_SPRITE\n    varying vec4 vSpriteSheet;\n#endif",
    branchAvoidanceFunctions: "float when_gt(float x, float y) {\n    return max(sign(x - y), 0.0);\n}\nfloat when_lt(float x, float y) {\n    return min( max(1.0 - sign(x - y), 0.0), 1.0 );\n}\nfloat when_eq( float x, float y ) {\n    return 1.0 - abs( sign( x - y ) );\n}\nfloat when_ge(float x, float y) {\n  return 1.0 - when_lt(x, y);\n}\nfloat when_le(float x, float y) {\n  return 1.0 - when_gt(x, y);\n}\nfloat and(float a, float b) {\n    return a * b;\n}\nfloat or(float a, float b) {\n    return min(a + b, 1.0);\n}",
    unpackColor: "vec3 unpackColor( in float hex ) {\n   vec3 c = vec3( 0.0 );\n   float r = mod( (hex / PACKED_COLOR_SIZE / PACKED_COLOR_SIZE), PACKED_COLOR_SIZE );\n   float g = mod( (hex / PACKED_COLOR_SIZE), PACKED_COLOR_SIZE );\n   float b = mod( hex, PACKED_COLOR_SIZE );\n   c.r = r / PACKED_COLOR_DIVISOR;\n   c.g = g / PACKED_COLOR_DIVISOR;\n   c.b = b / PACKED_COLOR_DIVISOR;\n   return c;\n}",
    unpackRotationAxis: "vec3 unpackRotationAxis( in float hex ) {\n   vec3 c = vec3( 0.0 );\n   float r = mod( (hex / PACKED_COLOR_SIZE / PACKED_COLOR_SIZE), PACKED_COLOR_SIZE );\n   float g = mod( (hex / PACKED_COLOR_SIZE), PACKED_COLOR_SIZE );\n   float b = mod( hex, PACKED_COLOR_SIZE );\n   c.r = r / PACKED_COLOR_DIVISOR;\n   c.g = g / PACKED_COLOR_DIVISOR;\n   c.b = b / PACKED_COLOR_DIVISOR;\n   c *= vec3( 2.0 );\n   c -= vec3( 1.0 );\n   return c;\n}",
    floatOverLifetime: "float getFloatOverLifetime( in float positionInTime, in vec4 attr ) {\n    highp float value = 0.0;\n    float deltaAge = positionInTime * float( VALUE_OVER_LIFETIME_LENGTH - 1 );\n    float fIndex = 0.0;\n    float shouldApplyValue = 0.0;\n    value += attr[ 0 ] * when_eq( deltaAge, 0.0 );\n\n    for( int i = 0; i < VALUE_OVER_LIFETIME_LENGTH - 1; ++i ) {\n       fIndex = float( i );\n       shouldApplyValue = and( when_gt( deltaAge, fIndex ), when_le( deltaAge, fIndex + 1.0 ) );\n       value += shouldApplyValue * mix( attr[ i ], attr[ i + 1 ], deltaAge - fIndex );\n    }\n\n    return value;\n}",
    colorOverLifetime: "vec3 getColorOverLifetime( in float positionInTime, in vec3 color1, in vec3 color2, in vec3 color3, in vec3 color4 ) {\n    vec3 value = vec3( 0.0 );\n    value.x = getFloatOverLifetime( positionInTime, vec4( color1.x, color2.x, color3.x, color4.x ) );\n    value.y = getFloatOverLifetime( positionInTime, vec4( color1.y, color2.y, color3.y, color4.y ) );\n    value.z = getFloatOverLifetime( positionInTime, vec4( color1.z, color2.z, color3.z, color4.z ) );\n    return value;\n}",
    paramFetchingFunctions: "float getAlive() {\n   return params.x;\n}\nfloat getAge() {\n   return params.y;\n}\nfloat getMaxAge() {\n   return params.z;\n}\nfloat getWiggle() {\n   return params.w;\n}",
    forceFetchingFunctions: "vec4 getPosition( in float age ) {\n   return modelViewMatrix * vec4( position, 1.0 );\n}\nvec3 getVelocity( in float age ) {\n   return velocity * age;\n}\nvec3 getAcceleration( in float age ) {\n   return acceleration.xyz * age;\n}",
    rotationFunctions: "#ifdef SHOULD_ROTATE_PARTICLES\n   mat4 getRotationMatrix( in vec3 axis, in float angle) {\n       axis = normalize(axis);\n       float s = sin(angle);\n       float c = cos(angle);\n       float oc = 1.0 - c;\n\n       return mat4(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,\n                   oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,\n                   oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,\n                   0.0,                                0.0,                                0.0,                                1.0);\n   }\n\n   vec3 getRotation( in vec3 pos, in float positionInTime ) {\n      if( rotation.y == 0.0 ) {\n           return pos;\n      }\n\n      vec3 axis = unpackRotationAxis( rotation.x );\n      vec3 center = rotationCenter;\n      vec3 translated;\n      mat4 rotationMatrix;\n      float angle = 0.0;\n      angle += when_eq( rotation.z, 0.0 ) * rotation.y;\n      angle += when_gt( rotation.z, 0.0 ) * mix( 0.0, rotation.y, positionInTime );\n      translated = rotationCenter - pos;\n      rotationMatrix = getRotationMatrix( axis, angle );\n      return center - vec3( rotationMatrix * vec4( translated, 0.0 ) );\n   }\n#endif",
    rotateTexture: "    vec2 vUv = vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y );\n\n    #ifdef SHOULD_ROTATE_TEXTURE\n       float x = gl_PointCoord.x - 0.5;\n       float y = 1.0 - gl_PointCoord.y - 0.5;\n       float c = cos( -vAngle );\n       float s = sin( -vAngle );\n       vUv = vec2( c * x + s * y + 0.5, c * y - s * x + 0.5 );\n    #endif\n\n    #ifdef SHOULD_CALCULATE_SPRITE\n        float framesX = vSpriteSheet.x;\n        float framesY = vSpriteSheet.y;\n        float columnNorm = vSpriteSheet.z;\n        float rowNorm = vSpriteSheet.w;\n        vUv.x = gl_PointCoord.x * framesX + columnNorm;\n        vUv.y = 1.0 - (gl_PointCoord.y * framesY + rowNorm);\n    #endif\n\n    vec4 rotatedTexture = texture2D( texture, vUv );"
};
SPE.shaders = {
    vertex: [SPE.shaderChunks.defines, SPE.shaderChunks.uniforms, SPE.shaderChunks.attributes, SPE.shaderChunks.varyings, THREE.ShaderChunk.common, THREE.ShaderChunk.logdepthbuf_pars_vertex, SPE.shaderChunks.branchAvoidanceFunctions, SPE.shaderChunks.unpackColor, SPE.shaderChunks.unpackRotationAxis, SPE.shaderChunks.floatOverLifetime, SPE.shaderChunks.colorOverLifetime, SPE.shaderChunks.paramFetchingFunctions, SPE.shaderChunks.forceFetchingFunctions, SPE.shaderChunks.rotationFunctions, "void main() {\n    highp float age = getAge();\n    highp float alive = getAlive();\n    highp float maxAge = getMaxAge();\n    highp float positionInTime = (age / maxAge);\n    highp float isAlive = when_gt( alive, 0.0 );\n    #ifdef SHOULD_WIGGLE_PARTICLES\n        float wiggleAmount = positionInTime * getWiggle();\n        float wiggleSin = isAlive * sin( wiggleAmount );\n        float wiggleCos = isAlive * cos( wiggleAmount );\n    #endif\n    vec3 vel = getVelocity( age );\n    vec3 accel = getAcceleration( age );\n    vec3 force = vec3( 0.0 );\n    vec3 pos = vec3( position );\n    float drag = 1.0 - (positionInTime * 0.5) * acceleration.w;\n    force += vel;\n    force *= drag;\n    force += accel * age;\n    pos += force;\n    #ifdef SHOULD_WIGGLE_PARTICLES\n        pos.x += wiggleSin;\n        pos.y += wiggleCos;\n        pos.z += wiggleSin;\n    #endif\n    #ifdef SHOULD_ROTATE_PARTICLES\n        pos = getRotation( pos, positionInTime );\n    #endif\n    vec4 mvPos = modelViewMatrix * vec4( pos, 1.0 );\n    highp float pointSize = getFloatOverLifetime( positionInTime, size ) * isAlive;\n    #ifdef HAS_PERSPECTIVE\n        float perspective = scale / length( mvPos.xyz );\n    #else\n        float perspective = 1.0;\n    #endif\n    float pointSizePerspective = pointSize * perspective;\n    #ifdef COLORIZE\n       vec3 c = isAlive * getColorOverLifetime(\n           positionInTime,\n           unpackColor( color.x ),\n           unpackColor( color.y ),\n           unpackColor( color.z ),\n           unpackColor( color.w )\n       );\n    #else\n       vec3 c = vec3(1.0);\n    #endif\n    float o = isAlive * getFloatOverLifetime( positionInTime, opacity );\n    vColor = vec4( c, o );\n    #ifdef SHOULD_ROTATE_TEXTURE\n        vAngle = isAlive * getFloatOverLifetime( positionInTime, angle );\n    #endif\n    #ifdef SHOULD_CALCULATE_SPRITE\n        float framesX = textureAnimation.x;\n        float framesY = textureAnimation.y;\n        float loopCount = textureAnimation.w;\n        float totalFrames = textureAnimation.z;\n        float frameNumber = mod( (positionInTime * loopCount) * totalFrames, totalFrames );\n        float column = floor(mod( frameNumber, framesX ));\n        float row = floor( (frameNumber - column) / framesX );\n        float columnNorm = column / framesX;\n        float rowNorm = row / framesY;\n        vSpriteSheet.x = 1.0 / framesX;\n        vSpriteSheet.y = 1.0 / framesY;\n        vSpriteSheet.z = columnNorm;\n        vSpriteSheet.w = rowNorm;\n    #endif\n    gl_PointSize = pointSizePerspective;\n    gl_Position = projectionMatrix * mvPos;",
        THREE.ShaderChunk.logdepthbuf_vertex, "}"
    ].join("\n"),
    fragment: [SPE.shaderChunks.uniforms, THREE.ShaderChunk.common, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.logdepthbuf_pars_fragment, SPE.shaderChunks.varyings, SPE.shaderChunks.branchAvoidanceFunctions, "void main() {\n    vec3 outgoingLight = vColor.xyz;\n    \n    #ifdef ALPHATEST\n       if ( vColor.w < float(ALPHATEST) ) discard;\n    #endif", SPE.shaderChunks.rotateTexture, THREE.ShaderChunk.logdepthbuf_fragment, "    outgoingLight = vColor.xyz * rotatedTexture.xyz;",
        THREE.ShaderChunk.fog_fragment, "    gl_FragColor = vec4( outgoingLight.xyz, rotatedTexture.w * vColor.w );\n}"
    ].join("\n")
};
SPE.utils = {
    types: {
        BOOLEAN: "boolean",
        STRING: "string",
        NUMBER: "number",
        OBJECT: "object"
    },
    ensureTypedArg: function(a, b, c) {
        return typeof a === b ? a : c
    },
    ensureArrayTypedArg: function(a, b, c) {
        if (Array.isArray(a)) {
            for (var d = a.length - 1; 0 <= d; --d)
                if (typeof a[d] !== b) return c;
            return a
        }
        return this.ensureTypedArg(a, b, c)
    },
    ensureInstanceOf: function(a, b, c) {
        return void 0 !== b && a instanceof b ? a : c
    },
    ensureArrayInstanceOf: function(a, b, c) {
        if (Array.isArray(a)) {
            for (var d = a.length - 1; 0 <= d; --d)
                if (void 0 !== b && !1 === a[d] instanceof b) return c;
            return a
        }
        return this.ensureInstanceOf(a, b, c)
    },
    ensureValueOverLifetimeCompliance: function(a, b, c) {
        b = b || 3;
        c = c || 3;
        !1 === Array.isArray(a._value) && (a._value = [a._value]);
        !1 === Array.isArray(a._spread) && (a._spread = [a._spread]);
        var d = this.clamp(a._value.length, b, c);
        b = this.clamp(a._spread.length, b, c);
        d = Math.max(d, b);
        a._value.length !== d && (a._value = this.interpolateArray(a._value, d));
        a._spread.length !== d && (a._spread = this.interpolateArray(a._spread, d))
    },
    interpolateArray: function(a, b) {
        for (var c = a.length, d = ["function" ===
                typeof a[0].clone ? a[0].clone() : a[0]
            ], e = (c - 1) / (b - 1), f = 1; f < b - 1; ++f) {
            var g = f * e,
                h = Math.floor(g);
            d[f] = this.lerpTypeAgnostic(a[h], a[Math.ceil(g)], g - h)
        }
        d.push("function" === typeof a[c - 1].clone ? a[c - 1].clone() : a[c - 1]);
        return d
    },
    clamp: function(a, b, c) {
        return Math.max(b, Math.min(a, c))
    },
    zeroToEpsilon: function(a, b) {
        b = b ? 1E-4 * Math.random() : 1E-5;
        0 > a && -1E-5 < a && (b = -b);
        return b
    },
    lerpTypeAgnostic: function(a, b, c) {
        var d = this.types;
        if (typeof a === d.NUMBER && typeof b === d.NUMBER) return a + (b - a) * c;
        if (a instanceof THREE.Vector2 &&
            b instanceof THREE.Vector2) return d = a.clone(), d.x = this.lerp(a.x, b.x, c), d.y = this.lerp(a.y, b.y, c), d;
        if (a instanceof THREE.Vector3 && b instanceof THREE.Vector3) return d = a.clone(), d.x = this.lerp(a.x, b.x, c), d.y = this.lerp(a.y, b.y, c), d.z = this.lerp(a.z, b.z, c), d;
        if (a instanceof THREE.Vector4 && b instanceof THREE.Vector4) return d = a.clone(), d.x = this.lerp(a.x, b.x, c), d.y = this.lerp(a.y, b.y, c), d.z = this.lerp(a.z, b.z, c), d.w = this.lerp(a.w, b.w, c), d;
        if (a instanceof THREE.Color && b instanceof THREE.Color) return d = a.clone(),
            d.r = this.lerp(a.r, b.r, c), d.g = this.lerp(a.g, b.g, c), d.b = this.lerp(a.b, b.b, c), d;
        console.warn("Invalid argument types, or argument types do not match:", a, b)
    },
    lerp: function(a, b, c) {
        return a + (b - a) * c
    },
    roundToNearestMultiple: function(a, b) {
        var c;
        if (0 === b) return a;
        c = Math.abs(a) % b;
        return 0 === c ? a : 0 > a ? -(Math.abs(a) - c) : a + b - c
    },
    arrayValuesAreEqual: function(a) {
        for (var b = 0; b < a.length - 1; ++b)
            if (a[b] !== a[b + 1]) return !1;
        return !0
    },
    randomFloat: function(a, b) {
        return a + b * (Math.random() - .5)
    },
    randomVector3: function(a, b, c, d, e) {
        var f =
            c.x + (Math.random() * d.x - .5 * d.x),
            g = c.y + (Math.random() * d.y - .5 * d.y);
        c = c.z + (Math.random() * d.z - .5 * d.z);
        e && (f = .5 * -e.x + this.roundToNearestMultiple(f, e.x), g = .5 * -e.y + this.roundToNearestMultiple(g, e.y), c = .5 * -e.z + this.roundToNearestMultiple(c, e.z));
        a.typedArray.setVec3Components(b, f, g, c)
    },
    randomColor: function(a, b, c, d) {
        var e = c.r + Math.random() * d.x,
            f = c.g + Math.random() * d.y;
        c = c.b + Math.random() * d.z;
        e = this.clamp(e, 0, 1);
        f = this.clamp(f, 0, 1);
        c = this.clamp(c, 0, 1);
        a.typedArray.setVec3Components(b, e, f, c)
    },
    randomColorAsHex: function() {
        var a =
            new THREE.Color;
        return function(b, c, d, e) {
            for (var f = d.length, g = [], h = 0; h < f; ++h) {
                var k = e[h];
                a.copy(d[h]);
                a.r += Math.random() * k.x - .5 * k.x;
                a.g += Math.random() * k.y - .5 * k.y;
                a.b += Math.random() * k.z - .5 * k.z;
                a.r = this.clamp(a.r, 0, 1);
                a.g = this.clamp(a.g, 0, 1);
                a.b = this.clamp(a.b, 0, 1);
                g.push(a.getHex())
            }
            b.typedArray.setVec4Components(c, g[0], g[1], g[2], g[3])
        }
    }(),
    randomVector3OnSphere: function(a, b, c, d, e, f, g, h) {
        h = 2 * Math.random() - 1;
        var k = 6.2832 * Math.random(),
            l = Math.sqrt(1 - h * h);
        d = this.randomFloat(d, e);
        g && (d = Math.round(d / g) *
            g);
        g = l * Math.cos(k) * d;
        k = l * Math.sin(k) * d;
        g *= f.x;
        k *= f.y;
        f = h * d * f.z;
        g += c.x;
        k += c.y;
        f += c.z;
        a.typedArray.setVec3Components(b, g, k, f)
    },
    seededRandom: function(a) {
        a = 1E4 * Math.sin(a);
        return a - (a | 0)
    },
    randomVector3OnDisc: function(a, b, c, d, e, f, g) {
        var h = 6.2832 * Math.random();
        d = Math.abs(this.randomFloat(d, e));
        g && (d = Math.round(d / g) * g);
        g = Math.cos(h) * d;
        h = Math.sin(h) * d;
        g *= f.x;
        h *= f.y;
        g += c.x;
        h += c.y;
        a.typedArray.setVec3Components(b, g, h, 0 + c.z)
    },
    randomDirectionVector3OnSphere: function() {
        var a = new THREE.Vector3;
        return function(b,
            c, d, e, f, g, h, k) {
            a.copy(g);
            a.x -= d;
            a.y -= e;
            a.z -= f;
            a.normalize().multiplyScalar(-this.randomFloat(h, k));
            b.typedArray.setVec3Components(c, a.x, a.y, a.z)
        }
    }(),
    randomDirectionVector3OnDisc: function() {
        var a = new THREE.Vector3;
        return function(b, c, d, e, f, g, h, k) {
            a.copy(g);
            a.x -= d;
            a.y -= e;
            a.z -= f;
            a.normalize().multiplyScalar(-this.randomFloat(h, k));
            b.typedArray.setVec3Components(c, a.x, a.y, 0)
        }
    }(),
    getPackedRotationAxis: function() {
        var a = new THREE.Vector3,
            b = new THREE.Vector3,
            c = new THREE.Color,
            d = new THREE.Vector3(1, 1, 1);
        return function(e,
            f) {
            a.copy(e).normalize();
            b.copy(f).normalize();
            a.x += .5 * -f.x + Math.random() * f.x;
            a.y += .5 * -f.y + Math.random() * f.y;
            a.z += .5 * -f.z + Math.random() * f.z;
            a.normalize().add(d).multiplyScalar(.5);
            c.setRGB(a.x, a.y, a.z);
            return c.getHex()
        }
    }()
};
SPE.Group = function(a) {
    var b = SPE.utils,
        c = b.types;
    a = b.ensureTypedArg(a, c.OBJECT, {});
    a.texture = b.ensureTypedArg(a.texture, c.OBJECT, {});
    this.uuid = THREE.Math.generateUUID();
    this.fixedTimeStep = b.ensureTypedArg(a.fixedTimeStep, c.NUMBER, .016);
    this.texture = b.ensureInstanceOf(a.texture.value, THREE.Texture, null);
    this.textureFrames = b.ensureInstanceOf(a.texture.frames, THREE.Vector2, new THREE.Vector2(1, 1));
    this.textureFrameCount = b.ensureTypedArg(a.texture.frameCount, c.NUMBER, this.textureFrames.x * this.textureFrames.y);
    this.textureLoop = b.ensureTypedArg(a.texture.loop, c.NUMBER, 1);
    this.textureFrames.max(new THREE.Vector2(1, 1));
    this.hasPerspective = b.ensureTypedArg(a.hasPerspective, c.BOOLEAN, !0);
    this.colorize = b.ensureTypedArg(a.colorize, c.BOOLEAN, !0);
    this.maxParticleCount = b.ensureTypedArg(a.maxParticleCount, c.NUMBER, null);
    this.blending = b.ensureTypedArg(a.blending, c.NUMBER, THREE.AdditiveBlending);
    this.transparent = b.ensureTypedArg(a.transparent, c.BOOLEAN, !0);
    this.alphaTest = parseFloat(b.ensureTypedArg(a.alphaTest, c.NUMBER,
        0));
    this.depthWrite = b.ensureTypedArg(a.depthWrite, c.BOOLEAN, !1);
    this.depthTest = b.ensureTypedArg(a.depthTest, c.BOOLEAN, !0);
    this.fog = b.ensureTypedArg(a.fog, c.BOOLEAN, !0);
    this.scale = b.ensureTypedArg(a.scale, c.NUMBER, 300);
    this.emitters = [];
    this.emitterIDs = [];
    this._pool = [];
    this._poolCreationSettings = null;
    this._createNewWhenPoolEmpty = 0;
    this._attributesNeedDynamicReset = this._attributesNeedRefresh = !1;
    this.particleCount = 0;
    this.uniforms = {
        texture: {
            type: "t",
            value: this.texture
        },
        textureAnimation: {
            type: "v4",
            value: new THREE.Vector4(this.textureFrames.x,
                this.textureFrames.y, this.textureFrameCount, Math.max(Math.abs(this.textureLoop), 1))
        },
        fogColor: {
            type: "c",
            value: null
        },
        fogNear: {
            type: "f",
            value: 10
        },
        fogFar: {
            type: "f",
            value: 200
        },
        fogDensity: {
            type: "f",
            value: .5
        },
        deltaTime: {
            type: "f",
            value: 0
        },
        runTime: {
            type: "f",
            value: 0
        },
        scale: {
            type: "f",
            value: this.scale
        }
    };
    this.defines = {
        HAS_PERSPECTIVE: this.hasPerspective,
        COLORIZE: this.colorize,
        VALUE_OVER_LIFETIME_LENGTH: SPE.valueOverLifetimeLength,
        SHOULD_ROTATE_TEXTURE: !1,
        SHOULD_ROTATE_PARTICLES: !1,
        SHOULD_WIGGLE_PARTICLES: !1,
        SHOULD_CALCULATE_SPRITE: 1 < this.textureFrames.x || 1 < this.textureFrames.y
    };
    this.attributes = {
        position: new SPE.ShaderAttribute("v3", !0),
        acceleration: new SPE.ShaderAttribute("v4", !0),
        velocity: new SPE.ShaderAttribute("v3", !0),
        rotation: new SPE.ShaderAttribute("v4", !0),
        rotationCenter: new SPE.ShaderAttribute("v3", !0),
        params: new SPE.ShaderAttribute("v4", !0),
        size: new SPE.ShaderAttribute("v4", !0),
        angle: new SPE.ShaderAttribute("v4", !0),
        color: new SPE.ShaderAttribute("v4", !0),
        opacity: new SPE.ShaderAttribute("v4", !0)
    };
    this.attributeKeys = Object.keys(this.attributes);
    this.attributeCount = this.attributeKeys.length;
    this.material = new THREE.ShaderMaterial({
        uniforms: this.uniforms,
        vertexShader: SPE.shaders.vertex,
        fragmentShader: SPE.shaders.fragment,
        blending: this.blending,
        transparent: this.transparent,
        alphaTest: this.alphaTest,
        depthWrite: this.depthWrite,
        depthTest: this.depthTest,
        defines: this.defines,
        fog: this.fog
    });
    this.geometry = new THREE.BufferGeometry;
    this.mesh = new THREE.Points(this.geometry, this.material);
    null === this.maxParticleCount &&
        console.warn("SPE.Group: No maxParticleCount specified. Adding emitters after rendering will probably cause errors.")
};
SPE.Group.constructor = SPE.Group;
SPE.Group.prototype._updateDefines = function() {
    var a = this.emitters,
        b = a.length - 1,
        c, d = this.defines;
    for (b; 0 <= b; --b) c = a[b], d.SHOULD_CALCULATE_SPRITE || (d.SHOULD_ROTATE_TEXTURE = d.SHOULD_ROTATE_TEXTURE || !!Math.max(Math.max.apply(null, c.angle.value), Math.max.apply(null, c.angle.spread))), d.SHOULD_ROTATE_PARTICLES = d.SHOULD_ROTATE_PARTICLES || !!Math.max(c.rotation.angle, c.rotation.angleSpread), d.SHOULD_WIGGLE_PARTICLES = d.SHOULD_WIGGLE_PARTICLES || !!Math.max(c.wiggle.value, c.wiggle.spread);
    this.material.needsUpdate = !0
};
SPE.Group.prototype._applyAttributesToGeometry = function() {
    var a = this.attributes,
        b = this.geometry,
        c = b.attributes,
        d, e, f;
    for (f in a) a.hasOwnProperty(f) && (d = a[f], (e = c[f]) ? e.array = d.typedArray.array : b.addAttribute(f, d.bufferAttribute), d.bufferAttribute.needsUpdate = !0);
    this.geometry.setDrawRange(0, this.particleCount)
};
SPE.Group.prototype.addEmitter = function(a) {
    if (!1 === a instanceof SPE.Emitter) console.error("`emitter` argument must be instance of SPE.Emitter. Was provided with:", a);
    else if (-1 < this.emitterIDs.indexOf(a.uuid)) console.error("Emitter already exists in this group. Will not add again.");
    else if (null !== a.group) console.error("Emitter already belongs to another group. Will not add to requested group.");
    else {
        var b = this.attributes,
            c = this.particleCount,
            d = c + a.particleCount;
        this.particleCount = d;
        null !== this.maxParticleCount &&
            this.particleCount > this.maxParticleCount && console.warn("SPE.Group: maxParticleCount exceeded. Requesting", this.particleCount, "particles, can support only", this.maxParticleCount);
        a._calculatePPSValue(a.maxAge._value + a.maxAge._spread);
        a._setBufferUpdateRanges(this.attributeKeys);
        a._setAttributeOffset(c);
        a.group = this;
        a.attributes = this.attributes;
        for (var e in b) b.hasOwnProperty(e) && b[e]._createBufferAttribute(null !== this.maxParticleCount ? this.maxParticleCount : this.particleCount);
        for (b = c; b < d; ++b) a._assignPositionValue(b),
            a._assignForceValue(b, "velocity"), a._assignForceValue(b, "acceleration"), a._assignAbsLifetimeValue(b, "opacity"), a._assignAbsLifetimeValue(b, "size"), a._assignAngleValue(b), a._assignRotationValue(b), a._assignParamsValue(b), a._assignColorValue(b);
        this._applyAttributesToGeometry();
        this.emitters.push(a);
        this.emitterIDs.push(a.uuid);
        this._updateDefines(a);
        this.material.needsUpdate = !0;
        this._attributesNeedRefresh = this.geometry.needsUpdate = !0;
        return this
    }
};
SPE.Group.prototype.removeEmitter = function(a) {
    var b = this.emitterIDs.indexOf(a.uuid);
    if (!1 === a instanceof SPE.Emitter) console.error("`emitter` argument must be instance of SPE.Emitter. Was provided with:", a);
    else if (-1 === b) console.error("Emitter does not exist in this group. Will not remove.");
    else {
        for (var c = a.attributeOffset, d = c + a.particleCount, e = this.attributes.params.typedArray, f = c; f < d; ++f) e.array[4 * f] = 0, e.array[4 * f + 1] = 0;
        this.emitters.splice(b, 1);
        this.emitterIDs.splice(b, 1);
        for (var g in this.attributes) this.attributes.hasOwnProperty(g) &&
            this.attributes[g].splice(c, d);
        this.particleCount -= a.particleCount;
        a._onRemove();
        this._attributesNeedRefresh = !0
    }
};
SPE.Group.prototype.getFromPool = function() {
    var a = this._pool,
        b = this._createNewWhenPoolEmpty;
    return a.length ? a.pop() : b ? new SPE.Emitter(this._poolCreationSettings) : null
};
SPE.Group.prototype.releaseIntoPool = function(a) {
    if (!1 === a instanceof SPE.Emitter) console.error("Argument is not instanceof SPE.Emitter:", a);
    else return a.reset(), this._pool.unshift(a), this
};
SPE.Group.prototype.getPool = function() {
    return this._pool
};
SPE.Group.prototype.addPool = function(a, b, c) {
    this._poolCreationSettings = b;
    this._createNewWhenPoolEmpty = !!c;
    for (var d = 0; d < a; ++d) c = Array.isArray(b) ? new SPE.Emitter(b[d]) : new SPE.Emitter(b), this.addEmitter(c), this.releaseIntoPool(c);
    return this
};
SPE.Group.prototype._triggerSingleEmitter = function(a) {
    var b = this.getFromPool(),
        c = this;
    if (null === b) console.log("SPE.Group pool ran out.");
    else return a instanceof THREE.Vector3 && (b.position.value.copy(a), b.position.value = b.position.value), b.enable(), setTimeout(function() {
        b.disable();
        c.releaseIntoPool(b)
    }, 1E3 * Math.max(b.duration, b.maxAge.value + b.maxAge.spread)), this
};
SPE.Group.prototype.triggerPoolEmitter = function(a, b) {
    if ("number" === typeof a && 1 < a)
        for (var c = 0; c < a; ++c) this._triggerSingleEmitter(b);
    else this._triggerSingleEmitter(b);
    return this
};
SPE.Group.prototype._updateUniforms = function(a) {
    this.uniforms.runTime.value += a;
    this.uniforms.deltaTime.value = a
};
SPE.Group.prototype._resetBufferRanges = function() {
    var a = this.attributeKeys,
        b = this.attributeCount - 1,
        c = this.attributes;
    for (b; 0 <= b; --b) c[a[b]].resetUpdateRange()
};
SPE.Group.prototype._updateBuffers = function(a) {
    var b = this.attributeKeys,
        c = this.attributeCount - 1,
        d = this.attributes;
    a = a.bufferUpdateRanges;
    var e, f;
    for (c; 0 <= c; --c) e = b[c], f = a[e], e = d[e], e.setUpdateRange(f.min, f.max), e.flagUpdate()
};
SPE.Group.prototype.tick = function(a) {
    var b = this.emitters,
        c = b.length;
    a = a || this.fixedTimeStep;
    var d = this.attributeKeys,
        e, f = this.attributes;
    this._updateUniforms(a);
    this._resetBufferRanges();
    if (0 !== c || !1 !== this._attributesNeedRefresh || !1 !== this._attributesNeedDynamicReset) {
        e = 0;
        for (var g; e < c; ++e) g = b[e], g.tick(a), this._updateBuffers(g);
        if (!0 === this._attributesNeedDynamicReset) {
            e = this.attributeCount - 1;
            for (e; 0 <= e; --e) f[d[e]].resetDynamic();
            this._attributesNeedDynamicReset = !1
        }
        if (!0 === this._attributesNeedRefresh) {
            e =
                this.attributeCount - 1;
            for (e; 0 <= e; --e) f[d[e]].forceUpdateAll();
            this._attributesNeedRefresh = !1;
            this._attributesNeedDynamicReset = !0
        }
    }
};
SPE.Group.prototype.dispose = function() {
    this.geometry.dispose();
    this.material.dispose();
    return this
};
SPE.Emitter = function(a) {
    var b = SPE.utils,
        c = b.types,
        d = SPE.valueOverLifetimeLength;
    a = b.ensureTypedArg(a, c.OBJECT, {});
    a.position = b.ensureTypedArg(a.position, c.OBJECT, {});
    a.velocity = b.ensureTypedArg(a.velocity, c.OBJECT, {});
    a.acceleration = b.ensureTypedArg(a.acceleration, c.OBJECT, {});
    a.radius = b.ensureTypedArg(a.radius, c.OBJECT, {});
    a.drag = b.ensureTypedArg(a.drag, c.OBJECT, {});
    a.rotation = b.ensureTypedArg(a.rotation, c.OBJECT, {});
    a.color = b.ensureTypedArg(a.color, c.OBJECT, {});
    a.opacity = b.ensureTypedArg(a.opacity,
        c.OBJECT, {});
    a.size = b.ensureTypedArg(a.size, c.OBJECT, {});
    a.angle = b.ensureTypedArg(a.angle, c.OBJECT, {});
    a.wiggle = b.ensureTypedArg(a.wiggle, c.OBJECT, {});
    a.maxAge = b.ensureTypedArg(a.maxAge, c.OBJECT, {});
    a.onParticleSpawn && console.warn("onParticleSpawn has been removed. Please set properties directly to alter values at runtime.");
    this.uuid = THREE.Math.generateUUID();
    this.type = b.ensureTypedArg(a.type, c.NUMBER, SPE.distributions.BOX);
    this.position = {
        _value: b.ensureInstanceOf(a.position.value, THREE.Vector3,
            new THREE.Vector3),
        _spread: b.ensureInstanceOf(a.position.spread, THREE.Vector3, new THREE.Vector3),
        _spreadClamp: b.ensureInstanceOf(a.position.spreadClamp, THREE.Vector3, new THREE.Vector3),
        _distribution: b.ensureTypedArg(a.position.distribution, c.NUMBER, this.type),
        _randomise: b.ensureTypedArg(a.position.randomise, c.BOOLEAN, !1),
        _radius: b.ensureTypedArg(a.position.radius, c.NUMBER, 10),
        _radiusScale: b.ensureInstanceOf(a.position.radiusScale, THREE.Vector3, new THREE.Vector3(1, 1, 1)),
        _distributionClamp: b.ensureTypedArg(a.position.distributionClamp,
            c.NUMBER, 0)
    };
    this.velocity = {
        _value: b.ensureInstanceOf(a.velocity.value, THREE.Vector3, new THREE.Vector3),
        _spread: b.ensureInstanceOf(a.velocity.spread, THREE.Vector3, new THREE.Vector3),
        _distribution: b.ensureTypedArg(a.velocity.distribution, c.NUMBER, this.type),
        _randomise: b.ensureTypedArg(a.position.randomise, c.BOOLEAN, !1)
    };
    this.acceleration = {
        _value: b.ensureInstanceOf(a.acceleration.value, THREE.Vector3, new THREE.Vector3),
        _spread: b.ensureInstanceOf(a.acceleration.spread, THREE.Vector3, new THREE.Vector3),
        _distribution: b.ensureTypedArg(a.acceleration.distribution, c.NUMBER, this.type),
        _randomise: b.ensureTypedArg(a.position.randomise, c.BOOLEAN, !1)
    };
    this.drag = {
        _value: b.ensureTypedArg(a.drag.value, c.NUMBER, 0),
        _spread: b.ensureTypedArg(a.drag.spread, c.NUMBER, 0),
        _randomise: b.ensureTypedArg(a.position.randomise, c.BOOLEAN, !1)
    };
    this.wiggle = {
        _value: b.ensureTypedArg(a.wiggle.value, c.NUMBER, 0),
        _spread: b.ensureTypedArg(a.wiggle.spread, c.NUMBER, 0)
    };
    this.rotation = {
        _axis: b.ensureInstanceOf(a.rotation.axis, THREE.Vector3,
            new THREE.Vector3(0, 1, 0)),
        _axisSpread: b.ensureInstanceOf(a.rotation.axisSpread, THREE.Vector3, new THREE.Vector3),
        _angle: b.ensureTypedArg(a.rotation.angle, c.NUMBER, 0),
        _angleSpread: b.ensureTypedArg(a.rotation.angleSpread, c.NUMBER, 0),
        _static: b.ensureTypedArg(a.rotation.static, c.BOOLEAN, !1),
        _center: b.ensureInstanceOf(a.rotation.center, THREE.Vector3, this.position._value.clone()),
        _randomise: b.ensureTypedArg(a.position.randomise, c.BOOLEAN, !1)
    };
    this.maxAge = {
        _value: b.ensureTypedArg(a.maxAge.value, c.NUMBER,
            2),
        _spread: b.ensureTypedArg(a.maxAge.spread, c.NUMBER, 0)
    };
    this.color = {
        _value: b.ensureArrayInstanceOf(a.color.value, THREE.Color, new THREE.Color),
        _spread: b.ensureArrayInstanceOf(a.color.spread, THREE.Vector3, new THREE.Vector3),
        _randomise: b.ensureTypedArg(a.position.randomise, c.BOOLEAN, !1)
    };
    this.opacity = {
        _value: b.ensureArrayTypedArg(a.opacity.value, c.NUMBER, 1),
        _spread: b.ensureArrayTypedArg(a.opacity.spread, c.NUMBER, 0),
        _randomise: b.ensureTypedArg(a.position.randomise, c.BOOLEAN, !1)
    };
    this.size = {
        _value: b.ensureArrayTypedArg(a.size.value,
            c.NUMBER, 1),
        _spread: b.ensureArrayTypedArg(a.size.spread, c.NUMBER, 0),
        _randomise: b.ensureTypedArg(a.position.randomise, c.BOOLEAN, !1)
    };
    this.angle = {
        _value: b.ensureArrayTypedArg(a.angle.value, c.NUMBER, 0),
        _spread: b.ensureArrayTypedArg(a.angle.spread, c.NUMBER, 0),
        _randomise: b.ensureTypedArg(a.position.randomise, c.BOOLEAN, !1)
    };
    this.particleCount = b.ensureTypedArg(a.particleCount, c.NUMBER, 100);
    this.duration = b.ensureTypedArg(a.duration, c.NUMBER, null);
    this.isStatic = b.ensureTypedArg(a.isStatic, c.BOOLEAN, !1);
    this.activeMultiplier =
        b.ensureTypedArg(a.activeMultiplier, c.NUMBER, 1);
    this.direction = b.ensureTypedArg(a.direction, c.NUMBER, 1);
    this.alive = b.ensureTypedArg(a.alive, c.BOOLEAN, !0);
    this.activeParticleCount = this.age = this.attributeEnd = this.attributeOffset = this.activationIndex = this.particlesPerSecond = 0;
    this.paramsArray = this.attributes = this.group = null;
    this.resetFlags = {
        position: b.ensureTypedArg(a.position.randomise, c.BOOLEAN, !1) || b.ensureTypedArg(a.radius.randomise, c.BOOLEAN, !1),
        velocity: b.ensureTypedArg(a.velocity.randomise, c.BOOLEAN, !1),
        acceleration: b.ensureTypedArg(a.acceleration.randomise, c.BOOLEAN, !1) || b.ensureTypedArg(a.drag.randomise, c.BOOLEAN, !1),
        rotation: b.ensureTypedArg(a.rotation.randomise, c.BOOLEAN, !1),
        rotationCenter: b.ensureTypedArg(a.rotation.randomise, c.BOOLEAN, !1),
        size: b.ensureTypedArg(a.size.randomise, c.BOOLEAN, !1),
        color: b.ensureTypedArg(a.color.randomise, c.BOOLEAN, !1),
        opacity: b.ensureTypedArg(a.opacity.randomise, c.BOOLEAN, !1),
        angle: b.ensureTypedArg(a.angle.randomise, c.BOOLEAN, !1)
    };
    this.updateFlags = {};
    this.updateCounts = {};
    this.updateMap = {
        maxAge: "params",
        position: "position",
        velocity: "velocity",
        acceleration: "acceleration",
        drag: "acceleration",
        wiggle: "params",
        rotation: "rotation",
        size: "size",
        color: "color",
        opacity: "opacity",
        angle: "angle"
    };
    for (var e in this.updateMap) this.updateMap.hasOwnProperty(e) && (this.updateCounts[this.updateMap[e]] = 0, this.updateFlags[this.updateMap[e]] = !1, this._createGetterSetters(this[e], e));
    this.bufferUpdateRanges = {};
    this.attributeKeys = null;
    this.attributeCount = 0;
    b.ensureValueOverLifetimeCompliance(this.color,
        d, d);
    b.ensureValueOverLifetimeCompliance(this.opacity, d, d);
    b.ensureValueOverLifetimeCompliance(this.size, d, d);
    b.ensureValueOverLifetimeCompliance(this.angle, d, d)
};
SPE.Emitter.constructor = SPE.Emitter;
SPE.Emitter.prototype._createGetterSetters = function(a, b) {
    var c = this,
        d;
    for (d in a)
        if (a.hasOwnProperty(d)) {
            var e = d.replace("_", "");
            Object.defineProperty(a, e, {
                get: function(a) {
                    return function() {
                        return this[a]
                    }
                }(d),
                set: function(a) {
                    return function(d) {
                        var e = c.updateMap[b],
                            f = this[a],
                            g = SPE.valueOverLifetimeLength;
                        "_rotationCenter" === a ? (c.updateFlags.rotationCenter = !0, c.updateCounts.rotationCenter = 0) : "_randomise" === a ? c.resetFlags[e] = d : (c.updateFlags[e] = !0, c.updateCounts[e] = 0);
                        c.group._updateDefines();
                        this[a] =
                            d;
                        Array.isArray(f) && SPE.utils.ensureValueOverLifetimeCompliance(c[b], g, g)
                    }
                }(d)
            })
        }
};
SPE.Emitter.prototype._setBufferUpdateRanges = function(a) {
    this.attributeKeys = a;
    this.attributeCount = a.length;
    for (var b = this.attributeCount - 1; 0 <= b; --b) this.bufferUpdateRanges[a[b]] = {
        min: Number.POSITIVE_INFINITY,
        max: Number.NEGATIVE_INFINITY
    }
};
SPE.Emitter.prototype._calculatePPSValue = function(a) {
    var b = this.particleCount;
    this.particlesPerSecond = this.duration ? b / (a < this.duration ? a : this.duration) : b / a
};
SPE.Emitter.prototype._setAttributeOffset = function(a) {
    this.activationIndex = this.attributeOffset = a;
    this.activationEnd = a + this.particleCount
};
SPE.Emitter.prototype._assignValue = function(a, b) {
    switch (a) {
        case "position":
            this._assignPositionValue(b);
            break;
        case "velocity":
        case "acceleration":
            this._assignForceValue(b, a);
            break;
        case "size":
        case "opacity":
            this._assignAbsLifetimeValue(b, a);
            break;
        case "angle":
            this._assignAngleValue(b);
            break;
        case "params":
            this._assignParamsValue(b);
            break;
        case "rotation":
            this._assignRotationValue(b);
            break;
        case "color":
            this._assignColorValue(b)
    }
};
SPE.Emitter.prototype._assignPositionValue = function(a) {
    var b = SPE.distributions,
        c = SPE.utils,
        d = this.position,
        e = this.attributes.position,
        f = d._value,
        g = d._spread;
    switch (d._distribution) {
        case b.BOX:
            c.randomVector3(e, a, f, g, d._spreadClamp);
            break;
        case b.SPHERE:
            c.randomVector3OnSphere(e, a, f, d._radius, d._spread.x, d._radiusScale, d._spreadClamp.x, d._distributionClamp || this.particleCount);
            break;
        case b.DISC:
            c.randomVector3OnDisc(e, a, f, d._radius, d._spread.x, d._radiusScale, d._spreadClamp.x)
    }
};
SPE.Emitter.prototype._assignForceValue = function(a, b) {
    var c = SPE.distributions,
        d = SPE.utils,
        e = this[b],
        f = e._value,
        g = e._spread,
        h;
    switch (e._distribution) {
        case c.BOX:
            d.randomVector3(this.attributes[b], a, f, g);
            break;
        case c.SPHERE:
            g = this.attributes.position.typedArray.array;
            h = 3 * a;
            c = g[h];
            f = g[h + 1];
            g = g[h + 2];
            d.randomDirectionVector3OnSphere(this.attributes[b], a, c, f, g, this.position._value, e._value.x, e._spread.x);
            break;
        case c.DISC:
            g = this.attributes.position.typedArray.array, h = 3 * a, c = g[h], f = g[h + 1], g = g[h + 2], d.randomDirectionVector3OnDisc(this.attributes[b],
                a, c, f, g, this.position._value, e._value.x, e._spread.x)
    }
    "acceleration" === b && (b = d.clamp(d.randomFloat(this.drag._value, this.drag._spread), 0, 1), this.attributes.acceleration.typedArray.array[4 * a + 3] = b)
};
SPE.Emitter.prototype._assignAbsLifetimeValue = function(a, b) {
    var c = this.attributes[b].typedArray;
    b = this[b];
    var d = SPE.utils;
    d.arrayValuesAreEqual(b._value) && d.arrayValuesAreEqual(b._spread) ? (b = Math.abs(d.randomFloat(b._value[0], b._spread[0])), c.setVec4Components(a, b, b, b, b)) : c.setVec4Components(a, Math.abs(d.randomFloat(b._value[0], b._spread[0])), Math.abs(d.randomFloat(b._value[1], b._spread[1])), Math.abs(d.randomFloat(b._value[2], b._spread[2])), Math.abs(d.randomFloat(b._value[3], b._spread[3])))
};
SPE.Emitter.prototype._assignAngleValue = function(a) {
    var b = this.attributes.angle.typedArray,
        c = this.angle,
        d = SPE.utils;
    d.arrayValuesAreEqual(c._value) && d.arrayValuesAreEqual(c._spread) ? (c = d.randomFloat(c._value[0], c._spread[0]), b.setVec4Components(a, c, c, c, c)) : b.setVec4Components(a, d.randomFloat(c._value[0], c._spread[0]), d.randomFloat(c._value[1], c._spread[1]), d.randomFloat(c._value[2], c._spread[2]), d.randomFloat(c._value[3], c._spread[3]))
};
SPE.Emitter.prototype._assignParamsValue = function(a) {
    this.attributes.params.typedArray.setVec4Components(a, this.isStatic ? 1 : 0, 0, Math.abs(SPE.utils.randomFloat(this.maxAge._value, this.maxAge._spread)), SPE.utils.randomFloat(this.wiggle._value, this.wiggle._spread))
};
SPE.Emitter.prototype._assignRotationValue = function(a) {
    this.attributes.rotation.typedArray.setVec3Components(a, SPE.utils.getPackedRotationAxis(this.rotation._axis, this.rotation._axisSpread), SPE.utils.randomFloat(this.rotation._angle, this.rotation._angleSpread), this.rotation._static ? 0 : 1);
    this.attributes.rotationCenter.typedArray.setVec3(a, this.rotation._center)
};
SPE.Emitter.prototype._assignColorValue = function(a) {
    SPE.utils.randomColorAsHex(this.attributes.color, a, this.color._value, this.color._spread)
};
SPE.Emitter.prototype._resetParticle = function(a) {
    for (var b = this.resetFlags, c = this.updateFlags, d = this.updateCounts, e = this.attributeKeys, f, g, h = this.attributeCount - 1; 0 <= h; --h)
        if (f = e[h], g = c[f], !0 === b[f] || !0 === g) this._assignValue(f, a), this._updateAttributeUpdateRange(f, a), !0 === g && d[f] === this.particleCount ? (c[f] = !1, d[f] = 0) : 1 == g && ++d[f]
};
SPE.Emitter.prototype._updateAttributeUpdateRange = function(a, b) {
    a = this.bufferUpdateRanges[a];
    a.min = Math.min(b, a.min);
    a.max = Math.max(b, a.max)
};
SPE.Emitter.prototype._resetBufferRanges = function() {
    var a = this.bufferUpdateRanges,
        b = this.bufferUpdateKeys,
        c = this.bufferUpdateCount - 1,
        d;
    for (c; 0 <= c; --c) d = b[c], a[d].min = Number.POSITIVE_INFINITY, a[d].max = Number.NEGATIVE_INFINITY
};
SPE.Emitter.prototype._onRemove = function() {
    this.activeParticleCount = this.activationIndex = this.attributeOffset = this.particlesPerSecond = 0;
    this.paramsArray = this.attributes = this.group = null;
    this.age = 0
};
SPE.Emitter.prototype._decrementParticleCount = function() {
    --this.activeParticleCount
};
SPE.Emitter.prototype._incrementParticleCount = function() {
    ++this.activeParticleCount
};
SPE.Emitter.prototype._checkParticleAges = function(a, b, c, d) {
    --b;
    for (var e, f, g, h; b >= a; --b) e = 4 * b, h = c[e], 0 !== h && (g = c[e + 1], f = c[e + 2], 1 === this.direction ? (g += d, g >= f && (h = g = 0, this._decrementParticleCount())) : (g -= d, 0 >= g && (g = f, h = 0, this._decrementParticleCount())), c[e] = h, c[e + 1] = g, this._updateAttributeUpdateRange("params", b))
};
SPE.Emitter.prototype._activateParticles = function(a, b, c, d) {
    for (var e = this.direction, f = a, g, h; f < b; ++f)
        if (g = 4 * f, 0 == c[g] || 1 === this.particleCount) this._incrementParticleCount(), c[g] = 1, this._resetParticle(f), h = d * (f - a), c[g + 1] = -1 === e ? c[g + 2] - h : h, this._updateAttributeUpdateRange("params", f)
};
SPE.Emitter.prototype.tick = function(a) {
    if (!this.isStatic) {
        null === this.paramsArray && (this.paramsArray = this.attributes.params.typedArray.array);
        var b = this.attributeOffset,
            c = b + this.particleCount,
            d = this.paramsArray,
            e = this.particlesPerSecond * this.activeMultiplier * a,
            f = this.activationIndex;
        this._resetBufferRanges();
        this._checkParticleAges(b, c, d, a);
        if (!1 === this.alive) this.age = 0;
        else if (null !== this.duration && this.age > this.duration) this.alive = !1, this.age = 0;
        else {
            var f = 1 === this.particleCount ? f : f | 0,
                g = Math.min(f +
                    e, this.activationEnd),
                h = g - this.activationIndex | 0;
            this._activateParticles(f, g, d, 0 < h ? a / h : 0);
            this.activationIndex += e;
            this.activationIndex > c && (this.activationIndex = b);
            this.age += a
        }
    }
};
SPE.Emitter.prototype.reset = function(a) {
    this.age = 0;
    this.alive = !1;
    if (!0 === a) {
        a = this.attributeOffset;
        for (var b = this.paramsArray, c = this.attributes.params.bufferAttribute, d = a + this.particleCount - 1, e; d >= a; --d) e = 4 * d, b[e] = 0, b[e + 1] = 0;
        c.updateRange.offset = 0;
        c.updateRange.count = -1;
        c.needsUpdate = !0
    }
    return this
};
SPE.Emitter.prototype.enable = function() {
    this.alive = !0;
    return this
};
SPE.Emitter.prototype.disable = function() {
    this.alive = !1;
    return this
};
SPE.Emitter.prototype.remove = function() {
    null !== this.group ? this.group.removeEmitter(this) : console.error("Emitter does not belong to a group, cannot remove.");
    return this
};

function SheepFX() {
    this.groups = [];
    this.screenScale = 180
}
SheepFX.prototype._finalize = function(a) {
    this.groups.push(a);
    a.sheepfxID = this.groups.length - 1;
    a.mesh.group = a;
    a.mesh.emitters = a.emitters;
    a.uniforms.scale.value = this.screenScale;
    return a.mesh
};
SheepFX.prototype.effectFromJson = function(a, b, c) {
    if (!a.emitter_length) return console.log("Error: Json file is not of type 'Effect'"), this.generateTemplate(b);
    var d = 0;
    if (c) d = c;
    else
        for (c = 0; c < a.emitter_length; c++) d += a["emitter_" + c.toString()].particleCount;
    b = a.texture && a.texture.frames && (1 != a.texture.frames.x || 1 != a.texture.frames.y) ? new SPE.Group({
        maxParticleCount: d,
        texture: {
            value: b,
            frames: (new THREE.Vector2).copy(a.texture.frames),
            frameCount: a.texture.frameCount,
            loop: a.texture.loop
        },
        blending: a.blending,
        depthWrite: a.depthWrite,
        depthTest: a.depthTest,
        fog: !0
    }) : new SPE.Group({
        maxParticleCount: d,
        texture: {
            value: b,
            frames: null,
            frameCount: null,
            loop: null
        },
        blending: a.blending,
        depthWrite: a.depthWrite,
        depthTest: a.depthTest,
        fog: !0
    });
    for (c = 0; c < a.emitter_length; c++) b.addEmitter(this.emitterFromJson(a["emitter_" + c.toString()]));
    return this._finalize(b)
};
SheepFX.prototype.emitterFromJson = function(a) {
    if (!a.particleCount) {
        console.log("Error: Json file is not of type 'Emitter'");
        a = this.generateTemplate(a, null);
        var b = a.emitters[0].copy();
        this.remove(a);
        return b
    }
    var b = [new THREE.Color(a.color.value[0].x, a.color.value[0].y, a.color.value[0].z), new THREE.Color(a.color.value[1].x, a.color.value[1].y, a.color.value[1].z), new THREE.Color(a.color.value[2].x, a.color.value[2].y, a.color.value[2].z), new THREE.Color(a.color.value[3].x, a.color.value[3].y, a.color.value[3].z)],
        c = [(new THREE.Vector3).copy(a.color.spread[0]), (new THREE.Vector3).copy(a.color.spread[1]), (new THREE.Vector3).copy(a.color.spread[2]), (new THREE.Vector3).copy(a.color.spread[3])];
    return new SPE.Emitter({
        type: a.type,
        particleCount: a.particleCount,
        duration: a.duration,
        isStatic: a.isStatic,
        activeMultiplier: a.activeMultiplier,
        direction: a.direction,
        maxAge: {
            value: a.maxAge.value,
            spread: a.maxAge.spread
        },
        position: {
            value: (new THREE.Vector3).copy(a.position.value),
            spread: (new THREE.Vector3).copy(a.position.spread),
            radius: a.position.radius,
            radiusScale: (new THREE.Vector3).copy(a.position.radiusScale),
            distribution: a.position.distribution,
            randomise: !1
        },
        velocity: {
            value: (new THREE.Vector3).copy(a.velocity.value),
            spread: (new THREE.Vector3).copy(a.velocity.spread),
            distribution: a.velocity.distribution,
            randomise: !1
        },
        acceleration: {
            value: (new THREE.Vector3).copy(a.acceleration.value),
            spread: (new THREE.Vector3).copy(a.acceleration.spread),
            randomise: !1
        },
        drag: {
            value: a.drag.value,
            spread: a.drag.spread,
            randomise: !1
        },
        wiggle: {
            value: a.wiggle.value,
            spread: a.wiggle.spread
        },
        rotation: {
            axis: (new THREE.Vector3).copy(a.rotation.axis),
            axisSpread: (new THREE.Vector3).copy(a.rotation.axisSpread),
            angle: a.rotation.angle,
            angleSpread: a.rotation.angleSpread,
            static: a.rotation.static,
            center: (new THREE.Vector3).copy(a.rotation.center),
            randomise: !1
        },
        color: {
            value: b,
            spread: c,
            randomise: !1
        },
        opacity: {
            value: [a.opacity.value[0], a.opacity.value[1], a.opacity.value[2], a.opacity.value[3]],
            spread: [a.opacity.spread[0], a.opacity.spread[1], a.opacity.spread[2], a.opacity.spread[3]],
            randomise: !1
        },
        size: {
            value: [a.size.value[0], a.size.value[1], a.size.value[2], a.size.value[3]],
            spread: [a.size.spread[0], a.size.spread[1], a.size.spread[2], a.size.spread[3]],
            randomise: !1
        },
        angle: {
            value: [a.angle.value[0], a.angle.value[1], a.angle.value[2], a.angle.value[3]],
            spread: [a.angle.spread[0], a.angle.spread[1], a.angle.spread[2], a.angle.spread[3]],
            randomise: !1
        }
    })
};
SheepFX.prototype.generateTemplate = function(a) {
    a = new SPE.Group({
        maxParticleCount: 1E4,
        texture: {
            value: a,
            frames: null,
            frameCount: 1,
            loop: 1
        },
        blending: THREE.AdditiveBlending,
        transparent: !0,
        depthWrite: !1,
        depthTest: !0,
        fog: !1,
        scale: 100
    });
    var b = new SPE.Emitter({
        type: SPE.distributions.box,
        particleCount: 400,
        duration: null,
        isStatic: !1,
        activeMultiplier: 1,
        direction: 1,
        maxAge: {
            value: 2,
            spread: 0
        },
        position: {
            value: new THREE.Vector3(0, 0, 0),
            spread: new THREE.Vector3(0, 0, 0),
            radius: 1,
            radiusScale: new THREE.Vector3(1, 1, 1),
            distribution: SPE.distributions.BOX,
            randomise: !1
        },
        velocity: {
            value: new THREE.Vector3(0, .5, 0),
            spread: new THREE.Vector3(.2, 0, .2),
            distribution: SPE.distributions.box,
            randomise: !1
        },
        acceleration: {
            value: new THREE.Vector3(0, 0, 0),
            spread: new THREE.Vector3(0, -.5, 0),
            randomise: !1
        },
        drag: {
            value: 0,
            spread: 0,
            randomise: !1
        },
        wiggle: {
            value: 0,
            spread: 0
        },
        rotation: {
            axis: new THREE.Vector3(0, 0, 0),
            axisSpread: new THREE.Vector3(1, 1, 1),
            angle: 0,
            angleSpread: 0,
            static: !1,
            center: new THREE.Vector3(0, 0, 0),
            randomise: !1
        },
        color: {
            value: [new THREE.Color("blue"), new THREE.Color("yellow"),
                new THREE.Color("red"), new THREE.Color("black")
            ],
            spread: [new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 0)],
            randomise: !1
        },
        opacity: {
            value: [0, 1, 1, 0],
            spread: [0, 0, 0, 0],
            randomise: !1
        },
        size: {
            value: [1, 1, 1, 3],
            spread: [0, 0, 0, 0],
            randomise: !1
        },
        angle: {
            value: [0, 10],
            spread: [1, 1],
            randomise: !1
        }
    });
    a.addEmitter(b);
    return this._finalize(a)
};
SheepFX.prototype.copyFX = function(a, b, c) {
    var d = a.group,
        e = 0;
    if (c) e = c;
    else
        for (c = 0; c < a.emitters.length; c++) e += a.emitters[c].particleCount;
    b = new SPE.Group({
        maxParticleCount: e,
        texture: {
            value: b,
            frames: d.textureFrames,
            frameCount: d.textureFrameCount,
            loop: d.textureLoop
        },
        blending: d.material.blending,
        depthWrite: d.material.depthWrite,
        depthTest: d.material.depthTest,
        fog: d.fog
    });
    for (c = 0; c < a.emitters.length; c++) d = a.emitters[c].copy(), b.addEmitter(d);
    return this._finalize(b)
};
SheepFX.prototype.remove = function(a) {
    0 >= this.groups.length && console.info("SheepFX: Attempting to remove from empty list");
    if (1 == this.groups.length) {
        this.groups.pop();
        for (a.parent && a.parent.remove(a); 0 < a.group.emitters.length;) a.group.removeEmitter(a.emitters[0]);
        a.group.dispose()
    } else {
        a = a.group.sheepfxID;
        var b = this.groups[a];
        this.groups[a] = this.groups[this.groups.length - 1];
        this.groups[a].sheepfxID = a;
        this.groups.pop();
        for (b.mesh.parent && b.mesh.parent.remove(b.mesh); 0 < b.emitters.length;) b.removeEmitter(b.emitters[0]);
        b.dispose()
    }
};
SheepFX.prototype.removeAll = function() {
    for (; 0 < this.groups.length;) this.remove(this.groups[0].mesh)
};
SheepFX.prototype.update = function(a) {
    for (var b = 0; b < this.groups.length; b++) this.groups[b].tick(a)
};
SheepFX.prototype.setParticleSize = function(a) {
    this.screenScale = .2 * a;
    for (a = 0; a < this.groups.length; a++) this.groups[a].uniforms.scale.value = this.screenScale
};
SheepFX.prototype.getJSON = function(a, b, c) {
    var d = "undefined" != typeof XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
    d.open("get", a, !0);
    d.onreadystatechange = function() {
        var a;
        4 == d.readyState && (a = d.status, 200 == a ? (a = JSON.parse(d.responseText), b && b(a)) : c && c(a))
    };
    d.send()
};
THREE.Points.prototype.setEffectScale = function(a) {
    var b = a / this._effectSize;
    this._effectSize = a;
    for (a = 0; a < this.emitters.length; a++) {
        var c = this.emitters[a];
        c.position.spread && (c.position.spread = c.position.spread.multiplyScalar(b));
        c.position.radious && (c.position.radious = c.position.radious.multiplyScalar(b));
        c.velocity.value && (c.velocity.value = c.velocity.value.multiplyScalar(b));
        c.velocity.spread && (c.velocity.spread = c.velocity.spread.multiplyScalar(b));
        c.acceleration.value && (c.acceleration.value = c.acceleration.value.multiplyScalar(b));
        c.acceleration.spread && (c.acceleration.spread = c.acceleration.spread.multiplyScalar(b));
        c.drag.value && (c.drag.value *= b);
        c.drag.spread && (c.drag.spread *= b);
        c.size.value && (c.size.value[0] *= b, c.size.value[1] *= b, c.size.value[2] *= b, c.size.value[3] *= b, c.size.value = c.size.value);
        c.size.spread && (c.size.spread[0] *= b, c.size.spread[1] *= b, c.size.spread[2] *= b, c.size.spread[3] *= b, c.size.spread = c.size.spread)
    }
};
THREE.Points.prototype.getEffectScale = function() {
    return this._effectSize
};
THREE.Points.prototype.reset = function() {
    for (var a = 0; a < this.group.emitters.length; a++) this.emitters[a].reset(), this.emitters[a].alive = !0
};
SPE.Emitter.prototype.copy = function(a) {
    a || (a = this.particleCount);
    var b = [new THREE.Color(this.color.value[0].r, this.color.value[0].g, this.color.value[0].b), new THREE.Color(this.color.value[1].r, this.color.value[1].g, this.color.value[1].b), new THREE.Color(this.color.value[2].r, this.color.value[2].g, this.color.value[2].b), new THREE.Color(this.color.value[3].r, this.color.value[3].g, this.color.value[3].b)],
        c = [(new THREE.Vector3).copy(this.color.spread[0]), (new THREE.Vector3).copy(this.color.spread[1]),
            (new THREE.Vector3).copy(this.color.spread[2]), (new THREE.Vector3).copy(this.color.spread[3])
        ];
    return new SPE.Emitter({
        particleCount: a,
        type: this.type,
        duration: this.duration,
        isStatic: this.isStatic,
        activeMultiplier: this.activeMultiplier,
        direction: this.direction,
        maxAge: {
            value: this.maxAge.value,
            spread: this.maxAge.spread
        },
        position: {
            value: (new THREE.Vector3).copy(this.position.value),
            spread: (new THREE.Vector3).copy(this.position.spread),
            radius: this.position.radius,
            radiusScale: (new THREE.Vector3).copy(this.position.radiusScale),
            distribution: this.position.distribution,
            randomise: !1
        },
        velocity: {
            value: (new THREE.Vector3).copy(this.velocity.value),
            spread: (new THREE.Vector3).copy(this.velocity.spread),
            distribution: this.velocity.distribution,
            randomise: !1
        },
        acceleration: {
            value: (new THREE.Vector3).copy(this.acceleration.value),
            spread: (new THREE.Vector3).copy(this.acceleration.spread),
            randomise: !1
        },
        drag: {
            value: this.drag.value,
            spread: this.drag.spread,
            randomise: !1
        },
        wiggle: {
            value: this.wiggle.value,
            spread: this.wiggle.spread
        },
        rotation: {
            axis: (new THREE.Vector3).copy(this.rotation.axis),
            axisSpread: (new THREE.Vector3).copy(this.rotation.axisSpread),
            angle: this.rotation.angle,
            angleSpread: this.rotation.angleSpread,
            static: this.rotation.static,
            center: (new THREE.Vector3).copy(this.rotation.center),
            randomise: !1
        },
        color: {
            value: b,
            spread: c,
            randomise: !1
        },
        opacity: {
            value: [this.opacity.value[0], this.opacity.value[1], this.opacity.value[2], this.opacity.value[3]],
            spread: [this.opacity.spread[0], this.opacity.spread[1], this.opacity.spread[2], this.opacity.spread[3]],
            randomise: !1
        },
        size: {
            value: [this.size.value[0],
                this.size.value[1], this.size.value[2], this.size.value[3]
            ],
            spread: [this.size.spread[0], this.size.spread[1], this.size.spread[2], this.size.spread[3]],
            randomise: !1
        },
        angle: {
            value: [this.angle.value[0], this.angle.value[1], this.angle.value[2], this.angle.value[3]],
            spread: [this.angle.spread[0], this.angle.spread[1], this.angle.spread[2], this.angle.spread[3]],
            randomise: !1
        }
    })
};
SPE.Emitter.prototype.setPositionLocal = function(a, b, c) {
    this.position.value = this.position.value.set(a, b, c)
};
SPE.Emitter.prototype.setPositionLocalX = function(a) {
    this.position.value.x = a;
    this.position.value = this.position.value
};
SPE.Emitter.prototype.setPositionLocalY = function(a) {
    this.position.value.y = a;
    this.position.value = this.position.value
};
SPE.Emitter.prototype.setPositionLocalZ = function(a) {
    this.position.value.z = a;
    this.position.value = this.position.value
};
SPE.Emitter.prototype.setPositionLocalv3 = function(a) {
    this.position.value = this.position.value.set(a.x, a.y, a.z)
};
SPE.Emitter.prototype.getPositionLocal = function() {
    return this.position.value
};

/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
! function(a, b, c, d) {
    "use strict";

    function e(a, b, c) {
        return setTimeout(j(a, c), b)
    }

    function f(a, b, c) {
        return Array.isArray(a) ? (g(a, c[b], c), !0) : !1
    }

    function g(a, b, c) {
        var e;
        if (a)
            if (a.forEach) a.forEach(b, c);
            else if (a.length !== d)
            for (e = 0; e < a.length;) b.call(c, a[e], e, a), e++;
        else
            for (e in a) a.hasOwnProperty(e) && b.call(c, a[e], e, a)
    }

    function h(b, c, d) {
        var e = "DEPRECATED METHOD: " + c + "\n" + d + " AT \n";
        return function() {
            var c = new Error("get-stack-trace"),
                d = c && c.stack ? c.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
                f = a.console && (a.console.warn || a.console.log);
            return f && f.call(a.console, e, d), b.apply(this, arguments)
        }
    }

    function i(a, b, c) {
        var d, e = b.prototype;
        d = a.prototype = Object.create(e), d.constructor = a, d._super = e, c && la(d, c)
    }

    function j(a, b) {
        return function() {
            return a.apply(b, arguments)
        }
    }

    function k(a, b) {
        return typeof a == oa ? a.apply(b ? b[0] || d : d, b) : a
    }

    function l(a, b) {
        return a === d ? b : a
    }

    function m(a, b, c) {
        g(q(b), function(b) {
            a.addEventListener(b, c, !1)
        })
    }

    function n(a, b, c) {
        g(q(b), function(b) {
            a.removeEventListener(b, c, !1)
        })
    }

    function o(a, b) {
        for (; a;) {
            if (a == b) return !0;
            a = a.parentNode
        }
        return !1
    }

    function p(a, b) {

            return a.indexOf(b) > -1
    }

    function q(a) {
        return a.trim().split(/\s+/g)
    }

    function r(a, b, c) {
        if (a.indexOf && !c) return a.indexOf(b);
        for (var d = 0; d < a.length;) {
            if (c && a[d][c] == b || !c && a[d] === b) return d;
            d++
        }
        return -1
    }

    function s(a) {
        return Array.prototype.slice.call(a, 0)
    }

    function t(a, b, c) {
        for (var d = [], e = [], f = 0; f < a.length;) {
            var g = b ? a[f][b] : a[f];
            r(e, g) < 0 && d.push(a[f]), e[f] = g, f++
        }
        return c && (d = b ? d.sort(function(a, c) {
            return a[b] > c[b]
        }) : d.sort()), d
    }

    function u(a, b) {
        for (var c, e, f = b[0].toUpperCase() + b.slice(1), g = 0; g < ma.length;) {
            if (c = ma[g], e = c ? c + f : b, e in a) return e;
            g++
        }
        return d
    }

    function v() {
        return ua++
    }

    function w(b) {
        var c = b.ownerDocument || b;
        return c.defaultView || c.parentWindow || a
    }

    function x(a, b) {
        var c = this;
        this.manager = a, this.callback = b, this.element = a.element, this.target = a.options.inputTarget, this.domHandler = function(b) {
            k(a.options.enable, [a]) && c.handler(b)
        }, this.init()
    }

    function y(a) {
        var b, c = a.options.inputClass;
        return new(b = c ? c : xa ? M : ya ? P : wa ? R : L)(a, z)
    }

    function z(a, b, c) {
        var d = c.pointers.length,
            e = c.changedPointers.length,
            f = b & Ea && d - e === 0,
            g = b & (Ga | Ha) && d - e === 0;
        c.isFirst = !!f, c.isFinal = !!g, f && (a.session = {}), c.eventType = b, A(a, c), a.emit("hammer.input", c), a.recognize(c), a.session.prevInput = c
    }

    function A(a, b) {
        var c = a.session,
            d = b.pointers,
            e = d.length;
        c.firstInput || (c.firstInput = D(b)), e > 1 && !c.firstMultiple ? c.firstMultiple = D(b) : 1 === e && (c.firstMultiple = !1);
        var f = c.firstInput,
            g = c.firstMultiple,
            h = g ? g.center : f.center,
            i = b.center = E(d);
        b.timeStamp = ra(), b.deltaTime = b.timeStamp - f.timeStamp, b.angle = I(h, i), b.distance = H(h, i), B(c, b), b.offsetDirection = G(b.deltaX, b.deltaY);
        var j = F(b.deltaTime, b.deltaX, b.deltaY);
        b.overallVelocityX = j.x, b.overallVelocityY = j.y, b.overallVelocity = qa(j.x) > qa(j.y) ? j.x : j.y, b.scale = g ? K(g.pointers, d) : 1, b.rotation = g ? J(g.pointers, d) : 0, b.maxPointers = c.prevInput ? b.pointers.length > c.prevInput.maxPointers ? b.pointers.length : c.prevInput.maxPointers : b.pointers.length, C(c, b);
        var k = a.element;
        o(b.srcEvent.target, k) && (k = b.srcEvent.target), b.target = k
    }

    function B(a, b) {
        var c = b.center,
            d = a.offsetDelta || {},
            e = a.prevDelta || {},
            f = a.prevInput || {};
        b.eventType !== Ea && f.eventType !== Ga || (e = a.prevDelta = {
            x: f.deltaX || 0,
            y: f.deltaY || 0
        }, d = a.offsetDelta = {
            x: c.x,
            y: c.y
        }), b.deltaX = e.x + (c.x - d.x), b.deltaY = e.y + (c.y - d.y)
    }

    function C(a, b) {
        var c, e, f, g, h = a.lastInterval || b,
            i = b.timeStamp - h.timeStamp;
        if (b.eventType != Ha && (i > Da || h.velocity === d)) {
            var j = b.deltaX - h.deltaX,
                k = b.deltaY - h.deltaY,
                l = F(i, j, k);
            e = l.x, f = l.y, c = qa(l.x) > qa(l.y) ? l.x : l.y, g = G(j, k), a.lastInterval = b
        } else c = h.velocity, e = h.velocityX, f = h.velocityY, g = h.direction;
        b.velocity = c, b.velocityX = e, b.velocityY = f, b.direction = g
    }

    function D(a) {
        for (var b = [], c = 0; c < a.pointers.length;) b[c] = {
            clientX: pa(a.pointers[c].clientX),
            clientY: pa(a.pointers[c].clientY)
        }, c++;
        return {
            timeStamp: ra(),
            pointers: b,
            center: E(b),
            deltaX: a.deltaX,
            deltaY: a.deltaY
        }
    }

    function E(a) {
        var b = a.length;
        if (1 === b) return {
            x: pa(a[0].clientX),
            y: pa(a[0].clientY)
        };
        for (var c = 0, d = 0, e = 0; b > e;) c += a[e].clientX, d += a[e].clientY, e++;
        return {
            x: pa(c / b),
            y: pa(d / b)
        }
    }

    function F(a, b, c) {
        return {
            x: b / a || 0,
            y: c / a || 0
        }
    }

    function G(a, b) {
        return a === b ? Ia : qa(a) >= qa(b) ? 0 > a ? Ja : Ka : 0 > b ? La : Ma
    }

    function H(a, b, c) {
        c || (c = Qa);
        var d = b[c[0]] - a[c[0]],
            e = b[c[1]] - a[c[1]];
        return Math.sqrt(d * d + e * e)
    }

    function I(a, b, c) {
        c || (c = Qa);
        var d = b[c[0]] - a[c[0]],
            e = b[c[1]] - a[c[1]];
        return 180 * Math.atan2(e, d) / Math.PI
    }

    function J(a, b) {
        return I(b[1], b[0], Ra) + I(a[1], a[0], Ra)
    }

    function K(a, b) {
        return H(b[0], b[1], Ra) / H(a[0], a[1], Ra)
    }

    function L() {
        this.evEl = Ta, this.evWin = Ua, this.pressed = !1, x.apply(this, arguments)
    }

    function M() {
        this.evEl = Xa, this.evWin = Ya, x.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
    }

    function N() {
        this.evTarget = $a, this.evWin = _a, this.started = !1, x.apply(this, arguments)
    }

    function O(a, b) {
        var c = s(a.touches),
            d = s(a.changedTouches);
        return b & (Ga | Ha) && (c = t(c.concat(d), "identifier", !0)), [c, d]
    }

    function P() {
        this.evTarget = bb, this.targetIds = {}, x.apply(this, arguments)
    }

    function Q(a, b) {
        var c = s(a.touches),
            d = this.targetIds;
        if (b & (Ea | Fa) && 1 === c.length) return d[c[0].identifier] = !0, [c, c];
        var e, f, g = s(a.changedTouches),
            h = [],
            i = this.target;
        if (f = c.filter(function(a) {
                return o(a.target, i)
            }), b === Ea)
            for (e = 0; e < f.length;) d[f[e].identifier] = !0, e++;
        for (e = 0; e < g.length;) d[g[e].identifier] && h.push(g[e]), b & (Ga | Ha) && delete d[g[e].identifier], e++;
        return h.length ? [t(f.concat(h), "identifier", !0), h] : void 0
    }

    function R() {
        x.apply(this, arguments);
        var a = j(this.handler, this);
        this.touch = new P(this.manager, a), this.mouse = new L(this.manager, a), this.primaryTouch = null, this.lastTouches = []
    }

    function S(a, b) {
        a & Ea ? (this.primaryTouch = b.changedPointers[0].identifier, T.call(this, b)) : a & (Ga | Ha) && T.call(this, b)
    }

    function T(a) {
        var b = a.changedPointers[0];
        if (b.identifier === this.primaryTouch) {
            var c = {
                x: b.clientX,
                y: b.clientY
            };
            this.lastTouches.push(c);
            var d = this.lastTouches,
                e = function() {
                    var a = d.indexOf(c);
                    a > -1 && d.splice(a, 1)
                };
            setTimeout(e, cb)
        }
    }

    function U(a) {
        for (var b = a.srcEvent.clientX, c = a.srcEvent.clientY, d = 0; d < this.lastTouches.length; d++) {
            var e = this.lastTouches[d],
                f = Math.abs(b - e.x),
                g = Math.abs(c - e.y);
            if (db >= f && db >= g) return !0
        }
        return !1
    }

    function V(a, b) {
        this.manager = a, this.set(b)
    }

    function W(a) {
        if (p(a, jb)) return jb;
        var b = p(a, kb),
            c = p(a, lb);
        return b && c ? jb : b || c ? b ? kb : lb : p(a, ib) ? ib : hb
    }

    function X() {
        if (!fb) return !1;
        var b = {},
            c = a.CSS && a.CSS.supports;
        return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function(d) {
            b[d] = c ? a.CSS.supports("touch-action", d) : !0
        }), b
    }

    function Y(a) {
        this.options = la({}, this.defaults, a || {}), this.id = v(), this.manager = null, this.options.enable = l(this.options.enable, !0), this.state = nb, this.simultaneous = {}, this.requireFail = []
    }

    function Z(a) {
        return a & sb ? "cancel" : a & qb ? "end" : a & pb ? "move" : a & ob ? "start" : ""
    }

    function $(a) {
        return a == Ma ? "down" : a == La ? "up" : a == Ja ? "left" : a == Ka ? "right" : ""
    }

    function _(a, b) {
        var c = b.manager;
        return c ? c.get(a) : a
    }

    function aa() {
        Y.apply(this, arguments)
    }

    function ba() {
        aa.apply(this, arguments), this.pX = null, this.pY = null
    }

    function ca() {

       aa.apply(this, arguments)
    }

    function da() {
        Y.apply(this, arguments), this._timer = null, this._input = null
    }

    function ea() {
        aa.apply(this, arguments)
    }

    function fa() {
        aa.apply(this, arguments)
    }

    function ga() {
        Y.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
    }

    function ha(a, b) {
        return b = b || {}, b.recognizers = l(b.recognizers, ha.defaults.preset), new ia(a, b)
    }

    function ia(a, b) {
        this.options = la({}, ha.defaults, b || {}), this.options.inputTarget = this.options.inputTarget || a, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = a, this.input = y(this), this.touchAction = new V(this, this.options.touchAction), ja(this, !0), g(this.options.recognizers, function(a) {
            var b = this.add(new a[0](a[1]));
            a[2] && b.recognizeWith(a[2]), a[3] && b.requireFailure(a[3])
        }, this)
    }

    function ja(a, b) {
        var c = a.element;
        if (c.style) {
            var d;
            g(a.options.cssProps, function(e, f) {
                d = u(c.style, f), b ? (a.oldCssProps[d] = c.style[d], c.style[d] = e) : c.style[d] = a.oldCssProps[d] || ""
            }), b || (a.oldCssProps = {})
        }
    }

    function ka(a, c) {
        var d = b.createEvent("Event");
        d.initEvent(a, !0, !0), d.gesture = c, c.target.dispatchEvent(d)
    }
    var la, ma = ["", "webkit", "Moz", "MS", "ms", "o"],
        na = b.createElement("div"),
        oa = "function",
        pa = Math.round,
        qa = Math.abs,
        ra = Date.now;
    la = "function" != typeof Object.assign ? function(a) {
        if (a === d || null === a) throw new TypeError("Cannot convert undefined or null to object");
        for (var b = Object(a), c = 1; c < arguments.length; c++) {
            var e = arguments[c];
            if (e !== d && null !== e)
                for (var f in e) e.hasOwnProperty(f) && (b[f] = e[f])
        }
        return b
    } : Object.assign;
    var sa = h(function(a, b, c) {
            for (var e = Object.keys(b), f = 0; f < e.length;)(!c || c && a[e[f]] === d) && (a[e[f]] = b[e[f]]), f++;
            return a
        }, "extend", "Use `assign`."),
        ta = h(function(a, b) {
            return sa(a, b, !0)
        }, "merge", "Use `assign`."),
        ua = 1,
        va = /mobile|tablet|ip(ad|hone|od)|android/i,
        wa = "ontouchstart" in a,
        xa = u(a, "PointerEvent") !== d,
        ya = wa && va.test(navigator.userAgent),
        za = "touch",
        Aa = "pen",
        Ba = "mouse",
        Ca = "kinect",
        Da = 25,
        Ea = 1,
        Fa = 2,
        Ga = 4,
        Ha = 8,
        Ia = 1,
        Ja = 2,
        Ka = 4,
        La = 8,
        Ma = 16,
        Na = Ja | Ka,
        Oa = La | Ma,
        Pa = Na | Oa,
        Qa = ["x", "y"],
        Ra = ["clientX", "clientY"];
    x.prototype = {
        handler: function() {},
        init: function() {
            this.evEl && m(this.element, this.evEl, this.domHandler), this.evTarget && m(this.target, this.evTarget, this.domHandler), this.evWin && m(w(this.element), this.evWin, this.domHandler)
        },
        destroy: function() {
            this.evEl && n(this.element, this.evEl, this.domHandler), this.evTarget && n(this.target, this.evTarget, this.domHandler), this.evWin && n(w(this.element), this.evWin, this.domHandler)
        }
    };
    var Sa = {
            mousedown: Ea,
            mousemove: Fa,
            mouseup: Ga
        },
        Ta = "mousedown",
        Ua = "mousemove mouseup";
    i(L, x, {
        handler: function(a) {
            var b = Sa[a.type];
            b & Ea && 0 === a.button && (this.pressed = !0), b & Fa && 1 !== a.which && (b = Ga), this.pressed && (b & Ga && (this.pressed = !1), this.callback(this.manager, b, {
                pointers: [a],
                changedPointers: [a],
                pointerType: Ba,
                srcEvent: a
            }))
        }
    });
    var Va = {
            pointerdown: Ea,
            pointermove: Fa,
            pointerup: Ga,
            pointercancel: Ha,
            pointerout: Ha
        },
        Wa = {
            2: za,
            3: Aa,
            4: Ba,
            5: Ca
        },
        Xa = "pointerdown",
        Ya = "pointermove pointerup pointercancel";
    a.MSPointerEvent && !a.PointerEvent && (Xa = "MSPointerDown", Ya = "MSPointerMove MSPointerUp MSPointerCancel"), i(M, x, {
        handler: function(a) {
            var b = this.store,
                c = !1,
                d = a.type.toLowerCase().replace("ms", ""),
                e = Va[d],
                f = Wa[a.pointerType] || a.pointerType,
                g = f == za,
                h = r(b, a.pointerId, "pointerId");
            e & Ea && (0 === a.button || g) ? 0 > h && (b.push(a), h = b.length - 1) : e & (Ga | Ha) && (c = !0), 0 > h || (b[h] = a, this.callback(this.manager, e, {
                pointers: b,
                changedPointers: [a],
                pointerType: f,
                srcEvent: a
            }), c && b.splice(h, 1))
        }
    });
    var Za = {
            touchstart: Ea,
            touchmove: Fa,
            touchend: Ga,
            touchcancel: Ha
        },
        $a = "touchstart",
        _a = "touchstart touchmove touchend touchcancel";
    i(N, x, {
        handler: function(a) {
            var b = Za[a.type];
            if (b === Ea && (this.started = !0), this.started) {
                var c = O.call(this, a, b);
                b & (Ga | Ha) && c[0].length - c[1].length === 0 && (this.started = !1), this.callback(this.manager, b, {
                    pointers: c[0],
                    changedPointers: c[1],
                    pointerType: za,
                    srcEvent: a
                })
            }
        }
    });
    var ab = {
            touchstart: Ea,
            touchmove: Fa,
            touchend: Ga,
            touchcancel: Ha
        },
        bb = "touchstart touchmove touchend touchcancel";
    i(P, x, {
        handler: function(a) {
            var b = ab[a.type],
                c = Q.call(this, a, b);
            c && this.callback(this.manager, b, {
                pointers: c[0],
                changedPointers: c[1],
                pointerType: za,
                srcEvent: a
            })
        }
    });
    var cb = 2500,
        db = 25;
    i(R, x, {
        handler: function(a, b, c) {
            var d = c.pointerType == za,
                e = c.pointerType == Ba;
            if (!(e && c.sourceCapabilities && c.sourceCapabilities.firesTouchEvents)) {
                if (d) S.call(this, b, c);
                else if (e && U.call(this, c)) return;
                this.callback(a, b, c)
            }
        },
        destroy: function() {
            this.touch.destroy(), this.mouse.destroy()
        }
    });
    var eb = u(na.style, "touchAction"),
        fb = eb !== d,
        gb = "compute",
        hb = "auto",
        ib = "manipulation",
        jb = "none",
        kb = "pan-x",
        lb = "pan-y",
        mb = X();
    V.prototype = {
        set: function(a) {
            a == gb && (a = this.compute()), fb && this.manager.element.style && mb[a] && (this.manager.element.style[eb] = a), this.actions = a.toLowerCase().trim()
        },
        update: function() {
            this.set(this.manager.options.touchAction)
        },
        compute: function() {
            var a = [];
            return g(this.manager.recognizers, function(b) {
                k(b.options.enable, [b]) && (a = a.concat(b.getTouchAction()))
            }), W(a.join(" "))
        },
        preventDefaults: function(a) {
            var b = a.srcEvent,
                c = a.offsetDirection;
            if (this.manager.session.prevented) return void b.preventDefault();
            var d = this.actions,
                e = p(d, jb) && !mb[jb],
                f = p(d, lb) && !mb[lb],
                g = p(d, kb) && !mb[kb];
            if (e) {
                var h = 1 === a.pointers.length,
                    i = a.distance < 2,
                    j = a.deltaTime < 250;
                if (h && i && j) return
            }
            return g && f ? void 0 : e || f && c & Na || g && c & Oa ? this.preventSrc(b) : void 0
        },
        preventSrc: function(a) {
            this.manager.session.prevented = !0, a.preventDefault()
        }
    };
    var nb = 1,
        ob = 2,
        pb = 4,
        qb = 8,
        rb = qb,
        sb = 16,
        tb = 32;
    Y.prototype = {
        defaults: {},
        set: function(a) {
            return la(this.options, a), this.manager && this.manager.touchAction.update(), this
        },
        recognizeWith: function(a) {
            if (f(a, "recognizeWith", this)) return this;
            var b = this.simultaneous;
            return a = _(a, this), b[a.id] || (b[a.id] = a, a.recognizeWith(this)), this
        },
        dropRecognizeWith: function(a) {
            return f(a, "dropRecognizeWith", this) ? this : (a = _(a, this), delete this.simultaneous[a.id], this)
        },
        requireFailure: function(a) {
            if (f(a, "requireFailure", this)) return this;
            var b = this.requireFail;
            return a = _(a, this), -1 === r(b, a) && (b.push(a), a.requireFailure(this)), this
        },
        dropRequireFailure: function(a) {
            if (f(a, "dropRequireFailure", this)) return this;
            a = _(a, this);
            var b = r(this.requireFail, a);
            return b > -1 && this.requireFail.splice(b, 1), this
        },
        hasRequireFailures: function() {
            return this.requireFail.length > 0
        },
        canRecognizeWith: function(a) {
            return !!this.simultaneous[a.id]
        },
        emit: function(a) {
            function b(b) {
                c.manager.emit(b, a)
            }
            var c = this,
                d = this.state;
            qb > d && b(c.options.event + Z(d)), b(c.options.event), a.additionalEvent && b(a.additionalEvent), d >= qb && b(c.options.event + Z(d))
        },
        tryEmit: function(a) {
            return this.canEmit() ? this.emit(a) : void(this.state = tb)
        },
        canEmit: function() {
            for (var a = 0; a < this.requireFail.length;) {
                if (!(this.requireFail[a].state & (tb | nb))) return !1;
                a++
            }
            return !0
        },
        recognize: function(a) {
            var b = la({}, a);
            return k(this.options.enable, [this, b]) ? (this.state & (rb | sb | tb) && (this.state = nb), this.state = this.process(b), void(this.state & (ob | pb | qb | sb) && this.tryEmit(b))) : (this.reset(), void(this.state = tb))
        },
        process: function(a) {},
        getTouchAction: function() {},
        reset: function() {}
    }, i(aa, Y, {
        defaults: {
            pointers: 1
        },
        attrTest: function(a) {
            var b = this.options.pointers;
            return 0 === b || a.pointers.length === b
        },
        process: function(a) {
            var b = this.state,
                c = a.eventType,
                d = b & (ob | pb),
                e = this.attrTest(a);
            return d && (c & Ha || !e) ? b | sb : d || e ? c & Ga ? b | qb : b & ob ? b | pb : ob : tb
        }
    }), i(ba, aa, {
        defaults: {
            event: "pan",
            threshold: 10,
            pointers: 1,
            direction: Pa
        },
        getTouchAction: function() {
            var a = this.options.direction,
                b = [];
            return a & Na && b.push(lb), a & Oa && b.push(kb), b
        },
        directionTest: function(a) {
            var b = this.options,
                c = !0,
                d = a.distance,
                e = a.direction,
                f = a.deltaX,
                g = a.deltaY;
            return e & b.direction || (b.direction & Na ? (e = 0 === f ? Ia : 0 > f ? Ja : Ka, c = f != this.pX, d = Math.abs(a.deltaX)) : (e = 0 === g ? Ia : 0 > g ? La : Ma, c = g != this.pY, d = Math.abs(a.deltaY))), a.direction = e, c && d > b.threshold && e & b.direction
        },
        attrTest: function(a) {
            return aa.prototype.attrTest.call(this, a) && (this.state & ob || !(this.state & ob) && this.directionTest(a))
        },
        emit: function(a) {
            this.pX = a.deltaX, this.pY = a.deltaY;
            var b = $(a.direction);
            b && (a.additionalEvent = this.options.event + b), this._super.emit.call(this, a)
        }
    }), i(ca, aa, {
        defaults: {
            event: "pinch",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [jb]
        },
        attrTest: function(a) {
            return this._super.attrTest.call(this, a) && (Math.abs(a.scale - 1) > this.options.threshold || this.state & ob)
        },
        emit: function(a) {
            if (1 !== a.scale) {
                var b = a.scale < 1 ? "in" : "out";
                a.additionalEvent = this.options.event + b
            }
            this._super.emit.call(this, a)
        }
    }), i(da, Y, {
        defaults: {
            event: "press",
            pointers: 1,
            time: 251,
            threshold: 9
        },
        getTouchAction: function() {
            return [hb]
        },
        process: function(a) {
            var b = this.options,
                c = a.pointers.length === b.pointers,
                d = a.distance < b.threshold,
                f = a.deltaTime > b.time;
            if (this._input = a, !d || !c || a.eventType & (Ga | Ha) && !f) this.reset();
            else if (a.eventType & Ea) this.reset(), this._timer = e(function() {
                this.state = rb, this.tryEmit()
            }, b.time, this);
            else if (a.eventType & Ga) return rb;
            return tb
        },
        reset: function() {
            clearTimeout(this._timer)
        },
        emit: function(a) {
            this.state === rb && (a && a.eventType & Ga ? this.manager.emit(this.options.event + "up", a) : (this._input.timeStamp = ra(), this.manager.emit(this.options.event, this._input)))
        }
    }), i(ea, aa, {
        defaults: {
            event: "rotate",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [jb]
        },
        attrTest: function(a) {
            return this._super.attrTest.call(this, a) && (Math.abs(a.rotation) > this.options.threshold || this.state & ob)
        }
    }), i(fa, aa, {
        defaults: {
            event: "swipe",
            threshold: 10,
            velocity: .3,
            direction: Na | Oa,
            pointers: 1
        },
        getTouchAction: function() {
            return ba.prototype.getTouchAction.call(this)
        },
        attrTest: function(a) {
            var b, c = this.options.direction;
            return c & (Na | Oa) ? b = a.overallVelocity : c & Na ? b = a.overallVelocityX : c & Oa && (b = a.overallVelocityY), this._super.attrTest.call(this, a) && c & a.offsetDirection && a.distance > this.options.threshold && a.maxPointers == this.options.pointers && qa(b) > this.options.velocity && a.eventType & Ga
        },
        emit: function(a) {
            var b = $(a.offsetDirection);
            b && this.manager.emit(this.options.event + b, a), this.manager.emit(this.options.event, a)
        }
    }), i(ga, Y, {
        defaults: {
            event: "tap",
            pointers: 1,
            taps: 1,
            interval: 300,
            time: 250,
            threshold: 9,
            posThreshold: 10
        },
        getTouchAction: function() {
            return [ib]
        },
        process: function(a) {
            var b = this.options,
                c = a.pointers.length === b.pointers,
                d = a.distance < b.threshold,
                f = a.deltaTime < b.time;
            if (this.reset(), a.eventType & Ea && 0 === this.count) return this.failTimeout();
            if (d && f && c) {
                if (a.eventType != Ga) return this.failTimeout();
                var g = this.pTime ? a.timeStamp - this.pTime < b.interval : !0,
                    h = !this.pCenter || H(this.pCenter, a.center) < b.posThreshold;
                this.pTime = a.timeStamp, this.pCenter = a.center, h && g ? this.count += 1 : this.count = 1, this._input = a;
                var i = this.count % b.taps;
                if (0 === i) return this.hasRequireFailures() ? (this._timer = e(function() {
                    this.state = rb, this.tryEmit()
                }, b.interval, this), ob) : rb
            }
            return tb
        },
        failTimeout: function() {
            return this._timer = e(function() {
                this.state = tb
            }, this.options.interval, this), tb
        },
        reset: function() {
            clearTimeout(this._timer)
        },
        emit: function() {
            this.state == rb && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
        }
    }), ha.VERSION = "2.0.7", ha.defaults = {
        domEvents: !1,
        touchAction: gb,
        enable: !0,
        inputTarget: null,
        inputClass: null,
        preset: [
            [ea, {
                enable: !1
            }],
            [ca, {
                    enable: !1
                },
                ["rotate"]
            ],
            [fa, {
                direction: Na
            }],
            [ba, {
                    direction: Na
                },
                ["swipe"]
            ],
            [ga],
            [ga, {
                    event: "doubletap",
                    taps: 2
                },
                ["tap"]
            ],
            [da]
        ],
        cssProps: {
            userSelect: "none",
            touchSelect: "none",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)"
        }
    };
    var ub = 1,
        vb = 2;
    ia.prototype = {
        set: function(a) {
            return la(this.options, a), a.touchAction && this.touchAction.update(), a.inputTarget && (this.input.destroy(), this.input.target = a.inputTarget, this.input.init()), this
        },
        stop: function(a) {
            this.session.stopped = a ? vb : ub
        },
        recognize: function(a) {
            var b = this.session;
            if (!b.stopped) {
                this.touchAction.preventDefaults(a);
                var c, d = this.recognizers,
                    e = b.curRecognizer;
                (!e || e && e.state & rb) && (e = b.curRecognizer = null);
                for (var f = 0; f < d.length;) c = d[f], b.stopped === vb || e && c != e && !c.canRecognizeWith(e) ? c.reset() : c.recognize(a), !e && c.state & (ob | pb | qb) && (e = b.curRecognizer = c), f++
            }
        },
        get: function(a) {
            if (a instanceof Y) return a;
            for (var b = this.recognizers, c = 0; c < b.length; c++)
                if (b[c].options.event == a) return b[c];
            return null
        },
        add: function(a) {
            if (f(a, "add", this)) return this;
            var b = this.get(a.options.event);
            return b && this.remove(b), this.recognizers.push(a), a.manager = this, this.touchAction.update(), a
        },
        remove: function(a) {
            if (f(a, "remove", this)) return this;
            if (a = this.get(a)) {
                var b = this.recognizers,
                    c = r(b, a); - 1 !== c && (b.splice(c, 1), this.touchAction.update())
            }
            return this
        },
        on: function(a, b) {
            if (a !== d && b !== d) {
                var c = this.handlers;
                return g(q(a), function(a) {
                    c[a] = c[a] || [], c[a].push(b)
                }), this
            }
        },
        off: function(a, b) {
            if (a !== d) {
                var c = this.handlers;
                return g(q(a), function(a) {
                    b ? c[a] && c[a].splice(r(c[a], b), 1) : delete c[a]
                }), this
            }
        },
        emit: function(a, b) {
            this.options.domEvents && ka(a, b);
            var c = this.handlers[a] && this.handlers[a].slice();
            if (c && c.length) {
                b.type = a, b.preventDefault = function() {
                    b.srcEvent.preventDefault()
                };
                for (var d = 0; d < c.length;) c[d](b), d++
            }
        },
        destroy: function() {
            this.element && ja(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
        }
    }, la(ha, {
        INPUT_START: Ea,
        INPUT_MOVE: Fa,
        INPUT_END: Ga,
        INPUT_CANCEL: Ha,
        STATE_POSSIBLE: nb,
        STATE_BEGAN: ob,
        STATE_CHANGED: pb,
        STATE_ENDED: qb,
        STATE_RECOGNIZED: rb,
        STATE_CANCELLED: sb,
        STATE_FAILED: tb,
        DIRECTION_NONE: Ia,
        DIRECTION_LEFT: Ja,
        DIRECTION_RIGHT: Ka,
        DIRECTION_UP: La,
        DIRECTION_DOWN: Ma,
        DIRECTION_HORIZONTAL: Na,
        DIRECTION_VERTICAL: Oa,
        DIRECTION_ALL: Pa,
        Manager: ia,
        Input: x,
        TouchAction: V,
        TouchInput: P,
        MouseInput: L,
        PointerEventInput: M,
        TouchMouseInput: R,
        SingleTouchInput: N,
        Recognizer: Y,
        AttrRecognizer: aa,
        Tap: ga,
        Pan: ba,
        Swipe: fa,
        Pinch: ca,
        Rotate: ea,
        Press: da,
        on: m,
        off: n,
        each: g,
        merge: ta,
        extend: sa,
        assign: la,
        inherit: i,
        bindFn: j,
        prefixed: u
    });
    var wb = "undefined" != typeof a ? a : "undefined" != typeof self ? self : {};
    wb.Hammer = ha, "function" == typeof define && define.amd ? define(function() {
        return ha
    }) : "undefined" != typeof module && module.exports ? module.exports = ha : a[c] = ha
}(window, document, "Hammer");
//# sourceMappingURL=hammer.min.js.map
/*!
 *  howler.js v2.0.2
 *  howlerjs.com
 *
 *  (c) 2013-2016, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */

(function() {

    'use strict';

    /** Global Methods **/
    /***************************************************************************/

    /**
     * Create the global controller. All contained methods and properties apply
     * to all sounds that are currently playing or will be in the future.
     */
    var HowlerGlobal = function() {
        this.init();
    };
    HowlerGlobal.prototype = {
        /**
         * Initialize the global Howler object.
         * @return {Howler}
         */
        init: function() {
            var self = this || Howler;

            // Internal properties.
            self._codecs = {};
            self._howls = [];
            self._muted = false;
            self._volume = 1;
            self._canPlayEvent = 'canplaythrough';
            self._navigator = (typeof window !== 'undefined' && window.navigator) ? window.navigator : null;

            // Public properties.
            self.masterGain = null;
            self.noAudio = false;
            self.usingWebAudio = true;
            self.autoSuspend = true;
            self.ctx = null;

            // Set to false to disable the auto iOS enabler.
            self.mobileAutoEnable = true;

            // Setup the various state values for global tracking.
            self._setup();

            return self;
        },

        /**
         * Get/set the global volume for all sounds.
         * @param  {Float} vol Volume from 0.0 to 1.0.
         * @return {Howler/Float}     Returns self or current volume.
         */
        volume: function(vol) {
            var self = this || Howler;
            vol = parseFloat(vol);

            // If we don't have an AudioContext created yet, run the setup.
            if (!self.ctx) {
                setupAudioContext();
            }

            if (typeof vol !== 'undefined' && vol >= 0 && vol <= 1) {
                self._volume = vol;

                // Don't update any of the nodes if we are muted.
                if (self._muted) {
                    return self;
                }

                // When using Web Audio, we just need to adjust the master gain.
                if (self.usingWebAudio) {
                    self.masterGain.gain.value = vol;
                }

                // Loop through and change volume for all HTML5 audio nodes.
                for (var i = 0; i < self._howls.length; i++) {
                    if (!self._howls[i]._webAudio) {
                        // Get all of the sounds in this Howl group.
                        var ids = self._howls[i]._getSoundIds();

                        // Loop through all sounds and change the volumes.
                        for (var j = 0; j < ids.length; j++) {
                            var sound = self._howls[i]._soundById(ids[j]);

                            if (sound && sound._node) {
                                sound._node.volume = sound._volume * vol;
                            }
                        }
                    }
                }

                return self;
            }

            return self._volume;
        },

        /**
         * Handle muting and unmuting globally.
         * @param  {Boolean} muted Is muted or not.
         */
        mute: function(muted) {
            var self = this || Howler;

            // If we don't have an AudioContext created yet, run the setup.
            if (!self.ctx) {
                setupAudioContext();
            }

            self._muted = muted;

            // With Web Audio, we just need to mute the master gain.
            if (self.usingWebAudio) {
                self.masterGain.gain.value = muted ? 0 : self._volume;
            }

            // Loop through and mute all HTML5 Audio nodes.
            for (var i = 0; i < self._howls.length; i++) {
                if (!self._howls[i]._webAudio) {
                    // Get all of the sounds in this Howl group.
                    var ids = self._howls[i]._getSoundIds();

                    // Loop through all sounds and mark the audio node as muted.
                    for (var j = 0; j < ids.length; j++) {
                        var sound = self._howls[i]._soundById(ids[j]);

                        if (sound && sound._node) {
                            sound._node.muted = (muted) ? true : sound._muted;
                        }
                    }
                }
            }

            return self;
        },

        /**
         * Unload and destroy all currently loaded Howl objects.
         * @return {Howler}
         */
        unload: function() {
            var self = this || Howler;

            for (var i = self._howls.length - 1; i >= 0; i--) {
                self._howls[i].unload();
            }

            // Create a new AudioContext to make sure it is fully reset.
            if (self.usingWebAudio && self.ctx && typeof self.ctx.close !== 'undefined') {
                self.ctx.close();
                self.ctx = null;
                setupAudioContext();
            }

            return self;
        },

        /**
         * Check for codec support of specific extension.
         * @param  {String} ext Audio file extention.
         * @return {Boolean}
         */
        codecs: function(ext) {

           

            return (this || Howler)._codecs[ext.replace(/^x-/, '')];
        },

        /**
         * Setup various state values for global tracking.
         * @return {Howler}
         */
        _setup: function() {
            var self = this || Howler;

            // Keeps track of the suspend/resume state of the AudioContext.
            self.state = self.ctx ? self.ctx.state || 'running' : 'running';

            // Automatically begin the 30-second suspend process
            self._autoSuspend();

            // Check if audio is available.
            if (!self.usingWebAudio) {
                // No audio is available on this system if noAudio is set to true.
                if (typeof Audio !== 'undefined') {
                    try {
                        var test = new Audio();

                        // Check if the canplaythrough event is available.
                        if (typeof test.oncanplaythrough === 'undefined') {
                            self._canPlayEvent = 'canplay';
                        }
                    } catch (e) {
                        self.noAudio = true;
                    }
                } else {
                    self.noAudio = true;
                }
            }

            // Test to make sure audio isn't disabled in Internet Explorer.
            try {
                var test = new Audio();
                if (test.muted) {
                    self.noAudio = true;
                }
            } catch (e) {}

            // Check for supported codecs.
            if (!self.noAudio) {
                self._setupCodecs();
            }

            return self;
        },

        /**
         * Check for browser support for various codecs and cache the results.
         * @return {Howler}
         */
        _setupCodecs: function() {
            var self = this || Howler;
            var audioTest = null;

            // Must wrap in a try/catch because IE11 in server mode throws an error.
            try {
                audioTest = (typeof Audio !== 'undefined') ? new Audio() : null;
            } catch (err) {
                return self;
            }

            if (!audioTest || typeof audioTest.canPlayType !== 'function') {
                return self;
            }

            var mpegTest = audioTest.canPlayType('audio/mpeg;').replace(/^no$/, '');

            // Opera version <33 has mixed MP3 support, so we need to check for and block it.
            var checkOpera = self._navigator && self._navigator.userAgent.match(/OPR\/([0-6].)/g);
            var isOldOpera = (checkOpera && parseInt(checkOpera[0].split('/')[1], 10) < 33);

            self._codecs = {
                mp3: !!(!isOldOpera && (mpegTest || audioTest.canPlayType('audio/mp3;').replace(/^no$/, ''))),
                mpeg: !!mpegTest,
                opus: !!audioTest.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ''),
                ogg: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''),
                oga: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''),
                wav: !!audioTest.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ''),
                aac: !!audioTest.canPlayType('audio/aac;').replace(/^no$/, ''),
                caf: !!audioTest.canPlayType('audio/x-caf;').replace(/^no$/, ''),
                m4a: !!(audioTest.canPlayType('audio/x-m4a;') || audioTest.canPlayType('audio/m4a;') || audioTest.canPlayType('audio/aac;')).replace(/^no$/, ''),
                mp4: !!(audioTest.canPlayType('audio/x-mp4;') || audioTest.canPlayType('audio/mp4;') || audioTest.canPlayType('audio/aac;')).replace(/^no$/, ''),
                weba: !!audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ''),
                webm: !!audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ''),
                dolby: !!audioTest.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ''),
                flac: !!(audioTest.canPlayType('audio/x-flac;') || audioTest.canPlayType('audio/flac;')).replace(/^no$/, '')
            };

            return self;
        },

        /**
         * Mobile browsers will only allow audio to be played after a user interaction.
         * Attempt to automatically unlock audio on the first user interaction.
         * Concept from: http://paulbakaus.com/tutorials/html5/web-audio-on-ios/
         * @return {Howler}
         */
        _enableMobileAudio: function() {
            var self = this || Howler;

            // Only run this on mobile devices if audio isn't already eanbled.
            var isMobile = /iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi/i.test(self._navigator && self._navigator.userAgent);
            var isTouch = !!(('ontouchend' in window) || (self._navigator && self._navigator.maxTouchPoints > 0) || (self._navigator && self._navigator.msMaxTouchPoints > 0));
            if (self._mobileEnabled || !self.ctx || (!isMobile && !isTouch)) {
                return;
            }

            self._mobileEnabled = false;

            // Some mobile devices/platforms have distortion issues when opening/closing tabs and/or web views.
            // Bugs in the browser (especially Mobile Safari) can cause the sampleRate to change from 44100 to 48000.
            // By calling Howler.unload(), we create a new AudioContext with the correct sampleRate.
            if (!self._mobileUnloaded && self.ctx.sampleRate !== 44100) {
                self._mobileUnloaded = true;
                self.unload();
            }

            // Scratch buffer for enabling iOS to dispose of web audio buffers correctly, as per:
            // http://stackoverflow.com/questions/24119684
            self._scratchBuffer = self.ctx.createBuffer(1, 1, 22050);

            // Call this method on touch start to create and play a buffer,
            // then check if the audio actually played to determine if
            // audio has now been unlocked on iOS, Android, etc.
            var unlock = function() {
                // Create an empty buffer.
                var source = self.ctx.createBufferSource();
                source.buffer = self._scratchBuffer;
                source.connect(self.ctx.destination);

                // Play the empty buffer.
                if (typeof source.start === 'undefined') {
                    source.noteOn(0);
                } else {
                    source.start(0);
                }

                // Setup a timeout to check that we are unlocked on the next event loop.
                source.onended = function() {
                    source.disconnect(0);

                    // Update the unlocked state and prevent this check from happening again.
                    self._mobileEnabled = true;
                    self.mobileAutoEnable = false;

                    // Remove the touch start listener.
                    document.removeEventListener('touchend', unlock, true);
                };
            };

            // Setup a touch start listener to attempt an unlock in.
            document.addEventListener('touchend', unlock, true);

            return self;
        },

        /**
         * Automatically suspend the Web Audio AudioContext after no sound has played for 30 seconds.
         * This saves processing/energy and fixes various browser-specific bugs with audio getting stuck.
         * @return {Howler}
         */
        _autoSuspend: function() {
            var self = this;

            if (!self.autoSuspend || !self.ctx || typeof self.ctx.suspend === 'undefined' || !Howler.usingWebAudio) {
                return;
            }

            // Check if any sounds are playing.
            for (var i = 0; i < self._howls.length; i++) {
                if (self._howls[i]._webAudio) {
                    for (var j = 0; j < self._howls[i]._sounds.length; j++) {
                        if (!self._howls[i]._sounds[j]._paused) {
                            return self;
                        }
                    }
                }
            }

            if (self._suspendTimer) {
                clearTimeout(self._suspendTimer);
            }

            // If no sound has played after 30 seconds, suspend the context.
            self._suspendTimer = setTimeout(function() {
                if (!self.autoSuspend) {
                    return;
                }

                self._suspendTimer = null;
                self.state = 'suspending';
                self.ctx.suspend().then(function() {
                    self.state = 'suspended';

                    if (self._resumeAfterSuspend) {
                        delete self._resumeAfterSuspend;
                        self._autoResume();
                    }
                });
            }, 30000);

            return self;
        },

        /**
         * Automatically resume the Web Audio AudioContext when a new sound is played.
         * @return {Howler}
         */
        _autoResume: function() {
            var self = this;

            if (!self.ctx || typeof self.ctx.resume === 'undefined' || !Howler.usingWebAudio) {
                return;
            }

            if (self.state === 'running' && self._suspendTimer) {
                clearTimeout(self._suspendTimer);
                self._suspendTimer = null;
            } else if (self.state === 'suspended') {
                self.state = 'resuming';
                self.ctx.resume().then(function() {
                    self.state = 'running';

                    // Emit to all Howls that the audio has resumed.
                    for (var i = 0; i < self._howls.length; i++) {
                        self._howls[i]._emit('resume');
                    }
                });

                if (self._suspendTimer) {
                    clearTimeout(self._suspendTimer);
                    self._suspendTimer = null;
                }
            } else if (self.state === 'suspending') {
                self._resumeAfterSuspend = true;
            }

            return self;
        }
    };

    // Setup the global audio controller.
    var Howler = new HowlerGlobal();

    /** Group Methods **/
    /***************************************************************************/

    /**
     * Create an audio group controller.
     * @param {Object} o Passed in properties for this group.
     */
    var Howl = function(o) {
        var self = this;

        // Throw an error if no source is provided.
        if (!o.src || o.src.length === 0) {
            console.error('An array of source files must be passed with any new Howl.');
            return;
        }

        self.init(o);
    };
    Howl.prototype = {
        /**
         * Initialize a new Howl group object.
         * @param  {Object} o Passed in properties for this group.
         * @return {Howl}
         */
        init: function(o) {
            var self = this;

            // If we don't have an AudioContext created yet, run the setup.
            if (!Howler.ctx) {
                setupAudioContext();
            }

            // Setup user-defined default properties.
            self._autoplay = o.autoplay || false;
            self._format = (typeof o.format !== 'string') ? o.format : [o.format];
            self._html5 = o.html5 || false;
            self._muted = o.mute || false;
            self._loop = o.loop || false;
            self._pool = o.pool || 5;
            self._preload = (typeof o.preload === 'boolean') ? o.preload : true;
            self._rate = o.rate || 1;
            self._sprite = o.sprite || {};
            self._src = (typeof o.src !== 'string') ? o.src : [o.src];
            self._volume = o.volume !== undefined ? o.volume : 1;

            // Setup all other default properties.
            self._duration = 0;
            self._state = 'unloaded';
            self._sounds = [];
            self._endTimers = {};
            self._queue = [];

            // Setup event listeners.
            self._onend = o.onend ? [{
                fn: o.onend
            }] : [];
            self._onfade = o.onfade ? [{
                fn: o.onfade
            }] : [];
            self._onload = o.onload ? [{
                fn: o.onload
            }] : [];
            self._onloaderror = o.onloaderror ? [{
                fn: o.onloaderror
            }] : [];
            self._onpause = o.onpause ? [{
                fn: o.onpause
            }] : [];
            self._onplay = o.onplay ? [{
                fn: o.onplay
            }] : [];
            self._onstop = o.onstop ? [{
                fn: o.onstop
            }] : [];
            self._onmute = o.onmute ? [{
                fn: o.onmute
            }] : [];
            self._onvolume = o.onvolume ? [{
                fn: o.onvolume
            }] : [];
            self._onrate = o.onrate ? [{
                fn: o.onrate
            }] : [];
            self._onseek = o.onseek ? [{
                fn: o.onseek
            }] : [];
            self._onresume = [];

            // Web Audio or HTML5 Audio?
            self._webAudio = Howler.usingWebAudio && !self._html5;

            // Automatically try to enable audio on iOS.
            if (typeof Howler.ctx !== 'undefined' && Howler.ctx && Howler.mobileAutoEnable) {
                Howler._enableMobileAudio();
            }

            // Keep track of this Howl group in the global controller.
            Howler._howls.push(self);

            // If they selected autoplay, add a play event to the load queue.
            if (self._autoplay) {
                self._queue.push({
                    event: 'play',
                    action: function() {
                        self.play();
                    }
                });
            }

            // Load the source file unless otherwise specified.
            if (self._preload) {
                self.load();
            }

            return self;
        },

        /**
         * Load the audio file.
         * @return {Howler}
         */
        load: function() {
            var self = this;
            var url = null;

            // If no audio is available, quit immediately.
            if (Howler.noAudio) {
                self._emit('loaderror', null, 'No audio support.');
                return;
            }

            // Make sure our source is in an array.
            if (typeof self._src === 'string') {
                self._src = [self._src];
            }

            // Loop through the sources and pick the first one that is compatible.
            for (var i = 0; i < self._src.length; i++) {
                var ext, str;

                if (self._format && self._format[i]) {
                    // If an extension was specified, use that instead.
                    ext = self._format[i];
                } else {
                    // Make sure the source is a string.
                    str = self._src[i];
                    if (typeof str !== 'string') {
                        self._emit('loaderror', null, 'Non-string found in selected audio sources - ignoring.');
                        continue;
                    }

                    // Extract the file extension from the URL or base64 data URI.
                    ext = /^data:audio\/([^;,]+);/i.exec(str);
                    if (!ext) {
                        ext = /\.([^.]+)$/.exec(str.split('?', 1)[0]);
                    }

                    if (ext) {
                        ext = ext[1].toLowerCase();
                    }
                }

                // Check if this extension is available.
                if (Howler.codecs(ext)) {
                    url = self._src[i];
                    break;
                }
            }

            if (!url) {
                self._emit('loaderror', null, 'No codec support for selected audio sources.');
                return;
            }

            self._src = url;
            self._state = 'loading';

            // If the hosting page is HTTPS and the source isn't,
            // drop down to HTML5 Audio to avoid Mixed Content errors.
            if (window.location.protocol === 'https:' && url.slice(0, 5) === 'http:') {
                self._html5 = true;
                self._webAudio = false;
            }

            // Create a new sound object and add it to the pool.
            new Sound(self);

            // Load and decode the audio data for playback.
            if (self._webAudio) {
                loadBuffer(self);
            }

            return self;
        },

        /**
         * Play a sound or resume previous playback.
         * @param  {String/Number} sprite   Sprite name for sprite playback or sound id to continue previous.
         * @param  {Boolean} internal Internal Use: true prevents event firing.
         * @return {Number}          Sound ID.
         */
        play: function(sprite, internal) {
            var self = this;
            var id = null;

            // Determine if a sprite, sound id or nothing was passed
            if (typeof sprite === 'number') {
                id = sprite;
                sprite = null;
            } else if (typeof sprite === 'string' && self._state === 'loaded' && !self._sprite[sprite]) {
                // If the passed sprite doesn't exist, do nothing.
                return null;
            } else if (typeof sprite === 'undefined') {
                // Use the default sound sprite (plays the full audio length).
                sprite = '__default';

                // Check if there is a single paused sound that isn't ended.
                // If there is, play that sound. If not, continue as usual.
                var num = 0;
                for (var i = 0; i < self._sounds.length; i++) {
                    if (self._sounds[i]._paused && !self._sounds[i]._ended) {
                        num++;
                        id = self._sounds[i]._id;
                    }
                }

                if (num === 1) {
                    sprite = null;
                } else {
                    id = null;
                }
            }

            // Get the selected node, or get one from the pool.
            var sound = id ? self._soundById(id) : self._inactiveSound();

            // If the sound doesn't exist, do nothing.
            if (!sound) {
                return null;
            }

            // Select the sprite definition.
            if (id && !sprite) {
                sprite = sound._sprite || '__default';
            }

            // If we have no sprite and the sound hasn't loaded, we must wait
            // for the sound to load to get our audio's duration.
            if (self._state !== 'loaded' && !self._sprite[sprite]) {
                self._queue.push({
                    event: 'play',
                    action: function() {
                        self.play(self._soundById(sound._id) ? sound._id : undefined);
                    }
                });

                return sound._id;
            }

            // Don't play the sound if an id was passed and it is already playing.
            if (id && !sound._paused) {
                // Trigger the play event, in order to keep iterating through queue.
                if (!internal) {
                    setTimeout(function() {
                        self._emit('play', sound._id);
                    }, 0);
                }

                return sound._id;
            }

            // Make sure the AudioContext isn't suspended, and resume it if it is.
            if (self._webAudio) {
                Howler._autoResume();
            }

            // Determine how long to play for and where to start playing.
            var seek = Math.max(0, sound._seek > 0 ? sound._seek : self._sprite[sprite][0] / 1000);
            var duration = Math.max(0, ((self._sprite[sprite][0] + self._sprite[sprite][1]) / 1000) - seek);
            var timeout = (duration * 1000) / Math.abs(sound._rate);

            // Update the parameters of the sound
            sound._paused = false;
            sound._ended = false;
            sound._sprite = sprite;
            sound._seek = seek;
            sound._start = self._sprite[sprite][0] / 1000;
            sound._stop = (self._sprite[sprite][0] + self._sprite[sprite][1]) / 1000;
            sound._loop = !!(sound._loop || self._sprite[sprite][2]);

            // Begin the actual playback.
            var node = sound._node;
            if (self._webAudio) {
                // Fire this when the sound is ready to play to begin Web Audio playback.
                var playWebAudio = function() {
                    self._refreshBuffer(sound);

                    // Setup the playback params.
                    var vol = (sound._muted || self._muted) ? 0 : sound._volume;
                    node.gain.setValueAtTime(vol, Howler.ctx.currentTime);
                    sound._playStart = Howler.ctx.currentTime;

                    // Play the sound using the supported method.
                    if (typeof node.bufferSource.start === 'undefined') {
                        sound._loop ? node.bufferSource.noteGrainOn(0, seek, 86400) : node.bufferSource.noteGrainOn(0, seek, duration);
                    } else {
                        sound._loop ? node.bufferSource.start(0, seek, 86400) : node.bufferSource.start(0, seek, duration);
                    }

                    // Start a new timer if none is present.
                    if (timeout !== Infinity) {
                        self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
                    }

                    if (!internal) {
                        setTimeout(function() {
                            self._emit('play', sound._id);
                        }, 0);
                    }
                };

                var isRunning = (Howler.state === 'running');
                if (self._state === 'loaded' && isRunning) {
                    playWebAudio();
                } else {
                    // Wait for the audio to load and then begin playback.
                    self.once(isRunning ? 'load' : 'resume', playWebAudio, isRunning ? sound._id : null);

                    // Cancel the end timer.
                    self._clearTimer(sound._id);
                }
            } else {
                // Fire this when the sound is ready to play to begin HTML5 Audio playback.
                var playHtml5 = function() {
                    node.currentTime = seek;
                    node.muted = sound._muted || self._muted || Howler._muted || node.muted;
                    node.volume = sound._volume * Howler.volume();
                    node.playbackRate = sound._rate;

                    setTimeout(function() {
                        node.play();

                        // Setup the new end timer.
                        if (timeout !== Infinity) {
                            self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
                        }

                        if (!internal) {
                            self._emit('play', sound._id);
                        }
                    }, 0);
                };

                // Play immediately if ready, or wait for the 'canplaythrough'e vent.
                var loadedNoReadyState = (self._state === 'loaded' && (window && window.ejecta || !node.readyState && Howler._navigator.isCocoonJS));
                if (node.readyState === 4 || loadedNoReadyState) {
                    playHtml5();
                } else {
                    var listener = function() {
                        // Begin playback.
                        playHtml5();

                        // Clear this listener.
                        node.removeEventListener(Howler._canPlayEvent, listener, false);
                    };
                    node.addEventListener(Howler._canPlayEvent, listener, false);

                    // Cancel the end timer.
                    self._clearTimer(sound._id);
                }
            }

            return sound._id;
        },

        /**
         * Pause playback and save current position.
         * @param  {Number} id The sound ID (empty to pause all in group).
         * @return {Howl}
         */
        pause: function(id) {
            var self = this;

            // If the sound hasn't loaded, add it to the load queue to pause when capable.
            if (self._state !== 'loaded') {
                self._queue.push({
                    event: 'pause',
                    action: function() {
                        self.pause(id);
                    }
                });

                return self;
            }

            // If no id is passed, get all ID's to be paused.
            var ids = self._getSoundIds(id);

            for (var i = 0; i < ids.length; i++) {
                // Clear the end timer.
                self._clearTimer(ids[i]);

                // Get the sound.
                var sound = self._soundById(ids[i]);

                if (sound && !sound._paused) {
                    // Reset the seek position.
                    sound._seek = self.seek(ids[i]);
                    sound._rateSeek = 0;
                    sound._paused = true;

                    // Stop currently running fades.
                    self._stopFade(ids[i]);

                    if (sound._node) {
                        if (self._webAudio) {
                            // make sure the sound has been created
                            if (!sound._node.bufferSource) {
                                return self;
                            }

                            if (typeof sound._node.bufferSource.stop === 'undefined') {
                                sound._node.bufferSource.noteOff(0);
                            } else {
                                sound._node.bufferSource.stop(0);
                            }

                            // Clean up the buffer source.
                            self._cleanBuffer(sound._node);
                        } else if (!isNaN(sound._node.duration) || sound._node.duration === Infinity) {
                            sound._node.pause();
                        }
                    }
                }

                // Fire the pause event, unless `true` is passed as the 2nd argument.
                if (!arguments[1]) {
                    self._emit('pause', sound ? sound._id : null);
                }
            }

            return self;
        },

        /**
         * Stop playback and reset to start.
         * @param  {Number} id The sound ID (empty to stop all in group).
         * @param  {Boolean} internal Internal Use: true prevents event firing.
         * @return {Howl}
         */
        stop: function(id, internal) {
            var self = this;

            // If the sound hasn't loaded, add it to the load queue to stop when capable.
            if (self._state !== 'loaded') {
                self._queue.push({
                    event: 'stop',
                    action: function() {
                        self.stop(id);
                    }
                });

                return self;
            }

            // If no id is passed, get all ID's to be stopped.
            var ids = self._getSoundIds(id);

            for (var i = 0; i < ids.length; i++) {
                // Clear the end timer.
                self._clearTimer(ids[i]);

                // Get the sound.
                var sound = self._soundById(ids[i]);

                if (sound) {
                    // Reset the seek position.
                    sound._seek = sound._start || 0;
                    sound._rateSeek = 0;
                    sound._paused = true;
                    sound._ended = true;

                    // Stop currently running fades.
                    self._stopFade(ids[i]);

                    if (sound._node) {
                        if (self._webAudio) {
                            // make sure the sound has been created
                            if (!sound._node.bufferSource) {
                                if (!internal) {
                                    self._emit('stop', sound._id);
                                }

                                return self;
                            }

                            if (typeof sound._node.bufferSource.stop === 'undefined') {
                                sound._node.bufferSource.noteOff(0);
                            } else {
                                sound._node.bufferSource.stop(0);
                            }

                            // Clean up the buffer source.
                            self._cleanBuffer(sound._node);
                        } else if (!isNaN(sound._node.duration) || sound._node.duration === Infinity) {
                            sound._node.currentTime = sound._start || 0;
                            sound._node.pause();
                        }
                    }
                }

                if (sound && !internal) {
                    self._emit('stop', sound._id);
                }
            }

            return self;
        },

        /**
         * Mute/unmute a single sound or all sounds in this Howl group.
         * @param  {Boolean} muted Set to true to mute and false to unmute.
         * @param  {Number} id    The sound ID to update (omit to mute/unmute all).
         * @return {Howl}
         */
        mute: function(muted, id) {
            var self = this;

            // If the sound hasn't loaded, add it to the load queue to mute when capable.
            if (self._state !== 'loaded') {
                self._queue.push({
                    event: 'mute',
                    action: function() {
                        self.mute(muted, id);
                    }
                });

                return self;
            }

            // If applying mute/unmute to all sounds, update the group's value.
            if (typeof id === 'undefined') {
                if (typeof muted === 'boolean') {
                    self._muted = muted;
                } else {
                    return self._muted;
                }
            }

            // If no id is passed, get all ID's to be muted.
            var ids = self._getSoundIds(id);

            for (var i = 0; i < ids.length; i++) {
                // Get the sound.
                var sound = self._soundById(ids[i]);

                if (sound) {
                    sound._muted = muted;

                    if (self._webAudio && sound._node) {
                        sound._node.gain.setValueAtTime(muted ? 0 : sound._volume, Howler.ctx.currentTime);
                    } else if (sound._node) {
                        sound._node.muted = Howler._muted ? true : muted;
                    }

                    self._emit('mute', sound._id);
                }
            }

            return self;
        },

        /**
         * Get/set the volume of this sound or of the Howl group. This method can optionally take 0, 1 or 2 arguments.
         *   volume() -> Returns the group's volume value.
         *   volume(id) -> Returns the sound id's current volume.
         *   volume(vol) -> Sets the volume of all sounds in this Howl group.
         *   volume(vol, id) -> Sets the volume of passed sound id.
         * @return {Howl/Number} Returns self or current volume.
         */
        volume: function() {
            var self = this;
            var args = arguments;
            var vol, id;

            // Determine the values based on arguments.
            if (args.length === 0) {
                // Return the value of the groups' volume.
                return self._volume;
            } else if (args.length === 1 || args.length === 2 && typeof args[1] === 'undefined') {
                // First check if this is an ID, and if not, assume it is a new volume.
                var ids = self._getSoundIds();
                var index = ids.indexOf(args[0]);
                if (index >= 0) {
                    id = parseInt(args[0], 10);
                } else {
                    vol = parseFloat(args[0]);
                }
            } else if (args.length >= 2) {
                vol = parseFloat(args[0]);
                id = parseInt(args[1], 10);
            }

            // Update the volume or return the current volume.
            var sound;
            if (typeof vol !== 'undefined' && vol >= 0 && vol <= 1) {
                // If the sound hasn't loaded, add it to the load queue to change volume when capable.
                if (self._state !== 'loaded') {
                    self._queue.push({
                        event: 'volume',
                        action: function() {
                            self.volume.apply(self, args);
                        }
                    });

                    return self;
                }

                // Set the group volume.
                if (typeof id === 'undefined') {
                    self._volume = vol;
                }

                // Update one or all volumes.
                id = self._getSoundIds(id);
                for (var i = 0; i < id.length; i++) {
                    // Get the sound.
                    sound = self._soundById(id[i]);

                    if (sound) {
                        sound._volume = vol;

                        // Stop currently running fades.
                        if (!args[2]) {
                            self._stopFade(id[i]);
                        }

                        if (self._webAudio && sound._node && !sound._muted) {
                            sound._node.gain.setValueAtTime(vol, Howler.ctx.currentTime);
                        } else if (sound._node && !sound._muted) {
                            sound._node.volume = vol * Howler.volume();
                        }

                        self._emit('volume', sound._id);
                    }
                }
            } else {
                sound = id ? self._soundById(id) : self._sounds[0];
                return sound ? sound._volume : 0;
            }

            return self;
        },

        /**
         * Fade a currently playing sound between two volumes (if no id is passsed, all sounds will fade).
         * @param  {Number} from The value to fade from (0.0 to 1.0).
         * @param  {Number} to   The volume to fade to (0.0 to 1.0).
         * @param  {Number} len  Time in milliseconds to fade.
         * @param  {Number} id   The sound id (omit to fade all sounds).
         * @return {Howl}
         */
        fade: function(from, to, len, id) {
            var self = this;
            var diff = Math.abs(from - to);
            var dir = from > to ? 'out' : 'in';
            var steps = diff / 0.01;
            var stepLen = (steps > 0) ? len / steps : len;

            // Since browsers clamp timeouts to 4ms, we need to clamp our steps to that too.
            if (stepLen < 4) {
                steps = Math.ceil(steps / (4 / stepLen));
                stepLen = 4;
            }

            // If the sound hasn't loaded, add it to the load queue to fade when capable.
            if (self._state !== 'loaded') {
                self._queue.push({
                    event: 'fade',
                    action: function() {
                        self.fade(from, to, len, id);
                    }
                });

                return self;
            }

            // Set the volume to the start position.
            self.volume(from, id);

            // Fade the volume of one or all sounds.
            var ids = self._getSoundIds(id);
            for (var i = 0; i < ids.length; i++) {
                // Get the sound.
                var sound = self._soundById(ids[i]);

                // Create a linear fade or fall back to timeouts with HTML5 Audio.
                if (sound) {
                    // Stop the previous fade if no sprite is being used (otherwise, volume handles this).
                    if (!id) {
                        self._stopFade(ids[i]);
                    }

                    // If we are using Web Audio, let the native methods do the actual fade.
                    if (self._webAudio && !sound._muted) {
                        var currentTime = Howler.ctx.currentTime;
                        var end = currentTime + (len / 1000);
                        sound._volume = from;
                        sound._node.gain.setValueAtTime(from, currentTime);
                        sound._node.gain.linearRampToValueAtTime(to, end);
                    }

                    var vol = from;
                    sound._interval = setInterval(function(soundId, sound) {
                        // Update the volume amount, but only if the volume should change.
                        if (steps > 0) {
                            vol += (dir === 'in' ? 0.01 : -0.01);
                        }

                        // Make sure the volume is in the right bounds.
                        vol = Math.max(0, vol);
                        vol = Math.min(1, vol);

                        // Round to within 2 decimal points.
                        vol = Math.round(vol * 100) / 100;

                        // Change the volume.
                        if (self._webAudio) {
                            if (typeof id === 'undefined') {
                                self._volume = vol;
                            }

                            sound._volume = vol;
                        } else {
                            self.volume(vol, soundId, true);
                        }

                        // When the fade is complete, stop it and fire event.
                        if (vol === to) {
                            clearInterval(sound._interval);
                            sound._interval = null;
                            self.volume(vol, soundId);
                            self._emit('fade', soundId);
                        }
                    }.bind(self, ids[i], sound), stepLen);
                }
            }

            return self;
        },

        /**
         * Internal method that stops the currently playing fade when
         * a new fade starts, volume is changed or the sound is stopped.
         * @param  {Number} id The sound id.
         * @return {Howl}
         */
        _stopFade: function(id) {
            var self = this;
            var sound = self._soundById(id);

            if (sound && sound._interval) {
                if (self._webAudio) {
                    sound._node.gain.cancelScheduledValues(Howler.ctx.currentTime);
                }

                clearInterval(sound._interval);
                sound._interval = null;
                self._emit('fade', id);
            }

            return self;
        },

        /**
         * Get/set the loop parameter on a sound. This method can optionally take 0, 1 or 2 arguments.
         *   loop() -> Returns the group's loop value.
         *   loop(id) -> Returns the sound id's loop value.
         *   loop(loop) -> Sets the loop value for all sounds in this Howl group.
         *   loop(loop, id) -> Sets the loop value of passed sound id.
         * @return {Howl/Boolean} Returns self or current loop value.
         */
        loop: function() {
            var self = this;
            var args = arguments;
            var loop, id, sound;

            // Determine the values for loop and id.
            if (args.length === 0) {
                // Return the grou's loop value.
                return self._loop;
            } else if (args.length === 1) {
                if (typeof args[0] === 'boolean') {
                    loop = args[0];
                    self._loop = loop;
                } else {
                    // Return this sound's loop value.
                    sound = self._soundById(parseInt(args[0], 10));
                    return sound ? sound._loop : false;
                }
            } else if (args.length === 2) {
                loop = args[0];
                id = parseInt(args[1], 10);
            }

            // If no id is passed, get all ID's to be looped.
            var ids = self._getSoundIds(id);
            for (var i = 0; i < ids.length; i++) {
                sound = self._soundById(ids[i]);

                if (sound) {
                    sound._loop = loop;
                    if (self._webAudio && sound._node && sound._node.bufferSource) {
                        sound._node.bufferSource.loop = loop;
                        if (loop) {
                            sound._node.bufferSource.loopStart = sound._start || 0;
                            sound._node.bufferSource.loopEnd = sound._stop;
                        }
                    }
                }
            }

            return self;
        },

        /**
         * Get/set the playback rate of a sound. This method can optionally take 0, 1 or 2 arguments.
         *   rate() -> Returns the first sound node's current playback rate.
         *   rate(id) -> Returns the sound id's current playback rate.
         *   rate(rate) -> Sets the playback rate of all sounds in this Howl group.
         *   rate(rate, id) -> Sets the playback rate of passed sound id.
         * @return {Howl/Number} Returns self or the current playback rate.
         */
        rate: function() {
            var self = this;
            var args = arguments;
            var rate, id;

            // Determine the values based on arguments.
            if (args.length === 0) {
                // We will simply return the current rate of the first node.
                id = self._sounds[0]._id;
            } else if (args.length === 1) {
                // First check if this is an ID, and if not, assume it is a new rate value.
                var ids = self._getSoundIds();
                var index = ids.indexOf(args[0]);
                if (index >= 0) {
                    id = parseInt(args[0], 10);
                } else {
                    rate = parseFloat(args[0]);
                }
            } else if (args.length === 2) {
                rate = parseFloat(args[0]);
                id = parseInt(args[1], 10);
            }

            // Update the playback rate or return the current value.
            var sound;
            if (typeof rate === 'number') {
                // If the sound hasn't loaded, add it to the load queue to change playback rate when capable.
                if (self._state !== 'loaded') {
                    self._queue.push({
                        event: 'rate',
                        action: function() {
                            self.rate.apply(self, args);
                        }
                    });

                    return self;
                }

                // Set the group rate.
                if (typeof id === 'undefined') {
                    self._rate = rate;
                }

                // Update one or all volumes.
                id = self._getSoundIds(id);
                for (var i = 0; i < id.length; i++) {
                    // Get the sound.
                    sound = self._soundById(id[i]);

                    if (sound) {
                        // Keep track of our position when the rate changed and update the playback
                        // start position so we can properly adjust the seek position for time elapsed.
                        sound._rateSeek = self.seek(id[i]);
                        sound._playStart = self._webAudio ? Howler.ctx.currentTime : sound._playStart;
                        sound._rate = rate;

                        // Change the playback rate.
                        if (self._webAudio && sound._node && sound._node.bufferSource) {
                            sound._node.bufferSource.playbackRate.value = rate;
                        } else if (sound._node) {
                            sound._node.playbackRate = rate;
                        }

                        // Reset the timers.
                        var seek = self.seek(id[i]);
                        var duration = ((self._sprite[sound._sprite][0] + self._sprite[sound._sprite][1]) / 1000) - seek;
                        var timeout = (duration * 1000) / Math.abs(sound._rate);

                        // Start a new end timer if sound is already playing.
                        if (self._endTimers[id[i]] || !sound._paused) {
                            self._clearTimer(id[i]);
                            self._endTimers[id[i]] = setTimeout(self._ended.bind(self, sound), timeout);
                        }

                        self._emit('rate', sound._id);
                    }
                }
            } else {
                sound = self._soundById(id);
                return sound ? sound._rate : self._rate;
            }

            return self;
        },

        /**
         * Get/set the seek position of a sound. This method can optionally take 0, 1 or 2 arguments.
         *   seek() -> Returns the first sound node's current seek position.
         *   seek(id) -> Returns the sound id's current seek position.
         *   seek(seek) -> Sets the seek position of the first sound node.
         *   seek(seek, id) -> Sets the seek position of passed sound id.
         * @return {Howl/Number} Returns self or the current seek position.
         */
        seek: function() {
            var self = this;
            var args = arguments;
            var seek, id;

            // Determine the values based on arguments.
            if (args.length === 0) {
                // We will simply return the current position of the first node.
                id = self._sounds[0]._id;
            } else if (args.length === 1) {
                // First check if this is an ID, and if not, assume it is a new seek position.
                var ids = self._getSoundIds();
                var index = ids.indexOf(args[0]);
                if (index >= 0) {
                    id = parseInt(args[0], 10);
                } else {
                    id = self._sounds[0]._id;
                    seek = parseFloat(args[0]);
                }
            } else if (args.length === 2) {
                seek = parseFloat(args[0]);
                id = parseInt(args[1], 10);
            }

            // If there is no ID, bail out.
            if (typeof id === 'undefined') {
                return self;
            }

            // If the sound hasn't loaded, add it to the load queue to seek when capable.
            if (self._state !== 'loaded') {
                self._queue.push({
                    event: 'seek',
                    action: function() {
                        self.seek.apply(self, args);
                    }
                });

                return self;
            }

            // Get the sound.
            var sound = self._soundById(id);

            if (sound) {
                if (typeof seek === 'number' && seek >= 0) {
                    // Pause the sound and update position for restarting playback.
                    var playing = self.playing(id);
                    if (playing) {
                        self.pause(id, true);
                    }

                    // Move the position of the track and cancel timer.
                    sound._seek = seek;
                    sound._ended = false;
                    self._clearTimer(id);

                    // Restart the playback if the sound was playing.
                    if (playing) {
                        self.play(id, true);
                    }

                    // Update the seek position for HTML5 Audio.
                    if (!self._webAudio && sound._node) {
                        sound._node.currentTime = seek;
                    }

                    self._emit('seek', id);
                } else {
                    if (self._webAudio) {
                        var realTime = self.playing(id) ? Howler.ctx.currentTime - sound._playStart : 0;
                        var rateSeek = sound._rateSeek ? sound._rateSeek - sound._seek : 0;
                        return sound._seek + (rateSeek + realTime * Math.abs(sound._rate));
                    } else {
                        return sound._node.currentTime;
                    }
                }
            }

            return self;
        },

        /**
         * Check if a specific sound is currently playing or not (if id is provided), or check if at least one of the sounds in the group is playing or not.
         * @param  {Number}  id The sound id to check. If none is passed, the whole sound group is checked.
         * @return {Boolean} True if playing and false if not.
         */
        playing: function(id) {
            var self = this;

            // Check the passed sound ID (if any).
            if (typeof id === 'number') {
                var sound = self._soundById(id);
                return sound ? !sound._paused : false;
            }

            // Otherwise, loop through all sounds and check if any are playing.
            for (var i = 0; i < self._sounds.length; i++) {
                if (!self._sounds[i]._paused) {
                    return true;
                }
            }

            return false;
        },

        /**
         * Get the duration of this sound. Passing a sound id will return the sprite duration.
         * @param  {Number} id The sound id to check. If none is passed, return full source duration.
         * @return {Number} Audio duration in seconds.
         */
        duration: function(id) {
            var self = this;
            var duration = self._duration;

            // If we pass an ID, get the sound and return the sprite length.
            var sound = self._soundById(id);
            if (sound) {
                duration = self._sprite[sound._sprite][1] / 1000;
            }

            return duration;
        },

        /**
         * Returns the current loaded state of this Howl.
         * @return {String} 'unloaded', 'loading', 'loaded'
         */
        state: function() {
            return this._state;
        },

        /**
         * Unload and destroy the current Howl object.
         * This will immediately stop all sound instances attached to this group.
         */
        unload: function() {
            var self = this;

            // Stop playing any active sounds.
            var sounds = self._sounds;
            for (var i = 0; i < sounds.length; i++) {
                // Stop the sound if it is currently playing.
                if (!sounds[i]._paused) {
                    self.stop(sounds[i]._id);
                    self._emit('end', sounds[i]._id);
                }

                // Remove the source or disconnect.
                if (!self._webAudio) {
                    // Set the source to 0-second silence to stop any downloading.
                    sounds[i]._node.src = 'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA=';

                    // Remove any event listeners.
                    sounds[i]._node.removeEventListener('error', sounds[i]._errorFn, false);
                    sounds[i]._node.removeEventListener(Howler._canPlayEvent, sounds[i]._loadFn, false);
                }

                // Empty out all of the nodes.
                delete sounds[i]._node;

                // Make sure all timers are cleared out.
                self._clearTimer(sounds[i]._id);

                // Remove the references in the global Howler object.
                var index = Howler._howls.indexOf(self);
                if (index >= 0) {
                    Howler._howls.splice(index, 1);
                }
            }

            // Delete this sound from the cache (if no other Howl is using it).
            var remCache = true;
            for (i = 0; i < Howler._howls.length; i++) {
                if (Howler._howls[i]._src === self._src) {
                    remCache = false;
                    break;
                }
            }

            if (cache && remCache) {
                delete cache[self._src];
            }

            // Clear global errors.
            Howler.noAudio = false;

            // Clear out `self`.
            self._state = 'unloaded';
            self._sounds = [];
            self = null;

            return null;
        },

        /**
         * Listen to a custom event.
         * @param  {String}   event Event name.
         * @param  {Function} fn    Listener to call.
         * @param  {Number}   id    (optional) Only listen to events for this sound.
         * @param  {Number}   once  (INTERNAL) Marks event to fire only once.
         * @return {Howl}
         */
        on: function(event, fn, id, once) {
            var self = this;
            var events = self['_on' + event];

            if (typeof fn === 'function') {
                events.push(once ? {
                    id: id,
                    fn: fn,
                    once: once
                } : {
                    id: id,
                    fn: fn
                });
            }

            return self;
        },

        /**
         * Remove a custom event. Call without parameters to remove all events.
         * @param  {String}   event Event name.
         * @param  {Function} fn    Listener to remove. Leave empty to remove all.
         * @param  {Number}   id    (optional) Only remove events for this sound.
         * @return {Howl}
         */
        off: function(event, fn, id) {
            var self = this;
            var events = self['_on' + event];
            var i = 0;

            if (fn) {
                // Loop through event store and remove the passed function.
                for (i = 0; i < events.length; i++) {
                    if (fn === events[i].fn && id === events[i].id) {
                        events.splice(i, 1);
                        break;
                    }
                }
            } else if (event) {
                // Clear out all events of this type.
                self['_on' + event] = [];
            } else {
                // Clear out all events of every type.
                var keys = Object.keys(self);
                for (i = 0; i < keys.length; i++) {
                    if ((keys[i].indexOf('_on') === 0) && Array.isArray(self[keys[i]])) {
                        self[keys[i]] = [];
                    }
                }
            }

            return self;
        },

        /**
         * Listen to a custom event and remove it once fired.
         * @param  {String}   event Event name.
         * @param  {Function} fn    Listener to call.
         * @param  {Number}   id    (optional) Only listen to events for this sound.
         * @return {Howl}
         */
        once: function(event, fn, id) {
            var self = this;

            // Setup the event listener.
            self.on(event, fn, id, 1);

            return self;
        },

        /**
         * Emit all events of a specific type and pass the sound id.
         * @param  {String} event Event name.
         * @param  {Number} id    Sound ID.
         * @param  {Number} msg   Message to go with event.
         * @return {Howl}
         */
        _emit: function(event, id, msg) {
            var self = this;
            var events = self['_on' + event];

            // Loop through event store and fire all functions.
            for (var i = events.length - 1; i >= 0; i--) {
                if (!events[i].id || events[i].id === id || event === 'load') {
                    setTimeout(function(fn) {
                        fn.call(this, id, msg);
                    }.bind(self, events[i].fn), 0);

                    // If this event was setup with `once`, remove it.
                    if (events[i].once) {
                        self.off(event, events[i].fn, events[i].id);
                    }
                }
            }

            return self;
        },

        /**
         * Queue of actions initiated before the sound has loaded.
         * These will be called in sequence, with the next only firing
         * after the previous has finished executing (even if async like play).
         * @return {Howl}
         */
        _loadQueue: function() {
            var self = this;

            if (self._queue.length > 0) {
                var task = self._queue[0];

                // don't move onto the next task until this one is done
                self.once(task.event, function() {
                    self._queue.shift();
                    self._loadQueue();
                });

                task.action();
            }

            return self;
        },

        /**
         * Fired when playback ends at the end of the duration.
         * @param  {Sound} sound The sound object to work with.
         * @return {Howl}
         */
        _ended: function(sound) {
            var self = this;
            var sprite = sound._sprite;

            // Should this sound loop?
            var loop = !!(sound._loop || self._sprite[sprite][2]);

            // Fire the ended event.
            self._emit('end', sound._id);

            // Restart the playback for HTML5 Audio loop.
            if (!self._webAudio && loop) {
                self.stop(sound._id, true).play(sound._id);
            }

            // Restart this timer if on a Web Audio loop.
            if (self._webAudio && loop) {
                self._emit('play', sound._id);
                sound._seek = sound._start || 0;
                sound._rateSeek = 0;
                sound._playStart = Howler.ctx.currentTime;

                var timeout = ((sound._stop - sound._start) * 1000) / Math.abs(sound._rate);
                self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
            }

            // Mark the node as paused.
            if (self._webAudio && !loop) {
                sound._paused = true;
                sound._ended = true;
                sound._seek = sound._start || 0;
                sound._rateSeek = 0;
                self._clearTimer(sound._id);

                // Clean up the buffer source.
                self._cleanBuffer(sound._node);

                // Attempt to auto-suspend AudioContext if no sounds are still playing.
                Howler._autoSuspend();
            }

            // When using a sprite, end the track.
            if (!self._webAudio && !loop) {
                self.stop(sound._id);
            }

            return self;
        },

        /**
         * Clear the end timer for a sound playback.
         * @param  {Number} id The sound ID.
         * @return {Howl}
         */
        _clearTimer: function(id) {
            var self = this;

            if (self._endTimers[id]) {
                clearTimeout(self._endTimers[id]);
                delete self._endTimers[id];
            }

            return self;
        },

        /**
         * Return the sound identified by this ID, or return null.
         * @param  {Number} id Sound ID
         * @return {Object}    Sound object or null.
         */
        _soundById: function(id) {
            var self = this;

            // Loop through all sounds and find the one with this ID.
            for (var i = 0; i < self._sounds.length; i++) {
                if (id === self._sounds[i]._id) {
                    return self._sounds[i];
                }
            }

            return null;
        },

        /**
         * Return an inactive sound from the pool or create a new one.
         * @return {Sound} Sound playback object.
         */
        _inactiveSound: function() {
            var self = this;

            self._drain();

            // Find the first inactive node to recycle.
            for (var i = 0; i < self._sounds.length; i++) {
                if (self._sounds[i]._ended) {
                    return self._sounds[i].reset();
                }
            }

            // If no inactive node was found, create a new one.
            return new Sound(self);
        },

        /**
         * Drain excess inactive sounds from the pool.
         */
        _drain: function() {
            var self = this;
            var limit = self._pool;
            var cnt = 0;
            var i = 0;

            // If there are less sounds than the max pool size, we are done.
            if (self._sounds.length < limit) {
                return;
            }

            // Count the number of inactive sounds.
            for (i = 0; i < self._sounds.length; i++) {
                if (self._sounds[i]._ended) {
                    cnt++;
                }
            }

            // Remove excess inactive sounds, going in reverse order.
            for (i = self._sounds.length - 1; i >= 0; i--) {
                if (cnt <= limit) {
                    return;
                }

                if (self._sounds[i]._ended) {
                    // Disconnect the audio source when using Web Audio.
                    if (self._webAudio && self._sounds[i]._node) {
                        self._sounds[i]._node.disconnect(0);
                    }

                    // Remove sounds until we have the pool size.
                    self._sounds.splice(i, 1);
                    cnt--;
                }
            }
        },

        /**
         * Get all ID's from the sounds pool.
         * @param  {Number} id Only return one ID if one is passed.
         * @return {Array}    Array of IDs.
         */
        _getSoundIds: function(id) {
            var self = this;

            if (typeof id === 'undefined') {
                var ids = [];
                for (var i = 0; i < self._sounds.length; i++) {
                    ids.push(self._sounds[i]._id);
                }

                return ids;
            } else {
                return [id];
            }
        },

        /**
         * Load the sound back into the buffer source.
         * @param  {Sound} sound The sound object to work with.
         * @return {Howl}
         */
        _refreshBuffer: function(sound) {
            var self = this;

            // Setup the buffer source for playback.
            sound._node.bufferSource = Howler.ctx.createBufferSource();
            sound._node.bufferSource.buffer = cache[self._src];

            // Connect to the correct node.
            if (sound._panner) {
                sound._node.bufferSource.connect(sound._panner);
            } else {
                sound._node.bufferSource.connect(sound._node);
            }

            // Setup looping and playback rate.
            sound._node.bufferSource.loop = sound._loop;
            if (sound._loop) {
                sound._node.bufferSource.loopStart = sound._start || 0;
                sound._node.bufferSource.loopEnd = sound._stop;
            }
            sound._node.bufferSource.playbackRate.value = sound._rate;

            return self;
        },

        /**
         * Prevent memory leaks by cleaning up the buffer source after playback.
         * @param  {Object} node Sound's audio node containing the buffer source.
         * @return {Howl}
         */
        _cleanBuffer: function(node) {
            var self = this;

            if (self._scratchBuffer) {
                node.bufferSource.onended = null;
                node.bufferSource.disconnect(0);
                try {
                    node.bufferSource.buffer = self._scratchBuffer;
                } catch (e) {}
            }
            node.bufferSource = null;

            return self;
        }
    };

    /** Single Sound Methods **/
    /***************************************************************************/

    /**
     * Setup the sound object, which each node attached to a Howl group is contained in.
     * @param {Object} howl The Howl parent group.
     */
    var Sound = function(howl) {
        this._parent = howl;
        this.init();
    };
    Sound.prototype = {
        /**
         * Initialize a new Sound object.
         * @return {Sound}
         */
        init: function() {
            var self = this;
            var parent = self._parent;

            // Setup the default parameters.
            self._muted = parent._muted;
            self._loop = parent._loop;
            self._volume = parent._volume;
            self._muted = parent._muted;
            self._rate = parent._rate;
            self._seek = 0;
            self._paused = true;
            self._ended = true;
            self._sprite = '__default';

            // Generate a unique ID for this sound.
            self._id = Math.round(Date.now() * Math.random());

            // Add itself to the parent's pool.
            parent._sounds.push(self);

            // Create the new node.
            self.create();

            return self;
        },

        /**
         * Create and setup a new sound object, whether HTML5 Audio or Web Audio.
         * @return {Sound}
         */
        create: function() {
            var self = this;
            var parent = self._parent;
            var volume = (Howler._muted || self._muted || self._parent._muted) ? 0 : self._volume;

            if (parent._webAudio) {
                // Create the gain node for controlling volume (the source will connect to this).
                self._node = (typeof Howler.ctx.createGain === 'undefined') ? Howler.ctx.createGainNode() : Howler.ctx.createGain();
                self._node.gain.setValueAtTime(volume, Howler.ctx.currentTime);
                self._node.paused = true;
                self._node.connect(Howler.masterGain);
            } else {
                self._node = new Audio();

                // Listen for errors (http://dev.w3.org/html5/spec-author-view/spec.html#mediaerror).
                self._errorFn = self._errorListener.bind(self);
                self._node.addEventListener('error', self._errorFn, false);

                // Listen for 'canplaythrough' event to let us know the sound is ready.
                self._loadFn = self._loadListener.bind(self);
                self._node.addEventListener(Howler._canPlayEvent, self._loadFn, false);

                // Setup the new audio node.
                self._node.src = parent._src;
                self._node.preload = 'auto';
                self._node.volume = volume * Howler.volume();

                // Begin loading the source.
                self._node.load();
            }

            return self;
        },

        /**
         * Reset the parameters of this sound to the original state (for recycle).
         * @return {Sound}
         */
        reset: function() {
            var self = this;
            var parent = self._parent;

            // Reset all of the parameters of this sound.
            self._muted = parent._muted;
            self._loop = parent._loop;
            self._volume = parent._volume;
            self._muted = parent._muted;
            self._rate = parent._rate;
            self._seek = 0;
            self._rateSeek = 0;
            self._paused = true;
            self._ended = true;
            self._sprite = '__default';

            // Generate a new ID so that it isn't confused with the previous sound.
            self._id = Math.round(Date.now() * Math.random());

            return self;
        },

        /**
         * HTML5 Audio error listener callback.
         */
        _errorListener: function() {
            var self = this;

            // Fire an error event and pass back the code.
            self._parent._emit('loaderror', self._id, self._node.error ? self._node.error.code : 0);

            // Clear the event listener.
            self._node.removeEventListener('error', self._errorListener, false);
        },

        /**
         * HTML5 Audio canplaythrough listener callback.
         */
        _loadListener: function() {
            var self = this;
            var parent = self._parent;

            // Round up the duration to account for the lower precision in HTML5 Audio.
            parent._duration = Math.ceil(self._node.duration * 10) / 10;

            // Setup a sprite if none is defined.
            if (Object.keys(parent._sprite).length === 0) {
                parent._sprite = {
                    __default: [0, parent._duration * 1000]
                };
            }

            if (parent._state !== 'loaded') {
                parent._state = 'loaded';
                parent._emit('load');
                parent._loadQueue();
            }

            // Clear the event listener.
            self._node.removeEventListener(Howler._canPlayEvent, self._loadFn, false);
        }
    };

    /** Helper Methods **/
    /***************************************************************************/

    var cache = {};

    /**
     * Buffer a sound from URL, Data URI or cache and decode to audio source (Web Audio API).
     * @param  {Howl} self
     */
    var loadBuffer = function(self) {
        var url = self._src;

        // Check if the buffer has already been cached and use it instead.
        if (cache[url]) {
            // Set the duration from the cache.
            self._duration = cache[url].duration;

            // Load the sound into this Howl.
            loadSound(self);

            return;
        }

        if (/^data:[^;]+;base64,/.test(url)) {
            // Decode the base64 data URI without XHR, since some browsers don't support it.
            var data = atob(url.split(',')[1]);
            var dataView = new Uint8Array(data.length);
            for (var i = 0; i < data.length; ++i) {
                dataView[i] = data.charCodeAt(i);
            }

            decodeAudioData(dataView.buffer, self);
        } else {
            // Load the buffer from the URL.
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.responseType = 'arraybuffer';
            xhr.onload = function() {
                // Make sure we get a successful response back.
                var code = (xhr.status + '')[0];
                if (code !== '0' && code !== '2' && code !== '3') {
                    self._emit('loaderror', null, 'Failed loading audio file with status: ' + xhr.status + '.');
                    return;
                }

                decodeAudioData(xhr.response, self);
            };
            xhr.onerror = function() {
                // If there is an error, switch to HTML5 Audio.
                if (self._webAudio) {
                    self._html5 = true;
                    self._webAudio = false;
                    self._sounds = [];
                    delete cache[url];
                    self.load();
                }
            };
            safeXhrSend(xhr);
        }
    };

    /**
     * Send the XHR request wrapped in a try/catch.
     * @param  {Object} xhr XHR to send.
     */
    var safeXhrSend = function(xhr) {
        try {
            xhr.send();
        } catch (e) {
            xhr.onerror();
        }
    };

    /**
     * Decode audio data from an array buffer.
     * @param  {ArrayBuffer} arraybuffer The audio data.
     * @param  {Howl}        self
     */
    var decodeAudioData = function(arraybuffer, self) {
        // Decode the buffer into an audio source.
        Howler.ctx.decodeAudioData(arraybuffer, function(buffer) {
            if (buffer && self._sounds.length > 0) {
                cache[self._src] = buffer;
                loadSound(self, buffer);
            }
        }, function() {
            self._emit('loaderror', null, 'Decoding audio data failed.');
        });
    };

    /**
     * Sound is now loaded, so finish setting everything up and fire the loaded event.
     * @param  {Howl} self
     * @param  {Object} buffer The decoded buffer sound source.
     */
    var loadSound = function(self, buffer) {
        // Set the duration.
        if (buffer && !self._duration) {
            self._duration = buffer.duration;
        }

        // Setup a sprite if none is defined.
        if (Object.keys(self._sprite).length === 0) {
            self._sprite = {
                __default: [0, self._duration * 1000]
            };
        }

        // Fire the loaded event.
        if (self._state !== 'loaded') {
            self._state = 'loaded';
            self._emit('load');
            self._loadQueue();
        }
    };

    /**
     * Setup the audio context when available, or switch to HTML5 Audio mode.
     */
    var setupAudioContext = function() {
        // Check if we are using Web Audio and setup the AudioContext if we are.
        try {
            if (typeof AudioContext !== 'undefined') {
                Howler.ctx = new AudioContext();
            } else if (typeof webkitAudioContext !== 'undefined') {
                Howler.ctx = new webkitAudioContext();
            } else {
                Howler.usingWebAudio = false;
            }
        } catch (e) {
            Howler.usingWebAudio = false;
        }

        // Check if a webview is being used on iOS8 or earlier (rather than the browser).
        // If it is, disable Web Audio as it causes crashing.
        var iOS = (/iP(hone|od|ad)/.test(Howler._navigator && Howler._navigator.platform));
        var appVersion = Howler._navigator && Howler._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
        var version = appVersion ? parseInt(appVersion[1], 10) : null;
        if (iOS && version && version < 9) {
            var safari = /safari/.test(Howler._navigator && Howler._navigator.userAgent.toLowerCase());
            if (Howler._navigator && Howler._navigator.standalone && !safari || Howler._navigator && !Howler._navigator.standalone && !safari) {
                Howler.usingWebAudio = false;
            }
        }

        // Create and expose the master GainNode when using Web Audio (useful for plugins or advanced usage).
        if (Howler.usingWebAudio) {
            Howler.masterGain = (typeof Howler.ctx.createGain === 'undefined') ? Howler.ctx.createGainNode() : Howler.ctx.createGain();
            Howler.masterGain.gain.value = 1;
            Howler.masterGain.connect(Howler.ctx.destination);
        }

        // Re-run the setup on Howler.
        Howler._setup();
    };

    // Add support for AMD (Asynchronous Module Definition) libraries such as require.js.
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return {
                Howler: Howler,
                Howl: Howl
            };
        });
    }

    // Add support for CommonJS libraries such as browserify.
    if (typeof exports !== 'undefined') {
        exports.Howler = Howler;
        exports.Howl = Howl;
    }

    // Define globally in case AMD is not available or unused.
    if (typeof window !== 'undefined') {
        window.HowlerGlobal = HowlerGlobal;
        window.Howler = Howler;
        window.Howl = Howl;
        window.Sound = Sound;
    } else if (typeof global !== 'undefined') { // Add to global in Node.js (for testing, etc).
        global.HowlerGlobal = HowlerGlobal;
        global.Howler = Howler;
        global.Howl = Howl;
        global.Sound = Sound;
    }
})();


/*!
 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
 *  
 *  howler.js v2.0.2
 *  howlerjs.com
 *
 *  (c) 2013-2016, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */

(function() {

    'use strict';

    // Setup default properties.
    HowlerGlobal.prototype._pos = [0, 0, 0];
    HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0];

    /** Global Methods **/
    /***************************************************************************/

    /**
     * Helper method to update the stereo panning position of all current Howls.
     * Future Howls will not use this value unless explicitly set.
     * @param  {Number} pan A value of -1.0 is all the way left and 1.0 is all the way right.
     * @return {Howler/Number}     Self or current stereo panning value.
     */
    HowlerGlobal.prototype.stereo = function(pan) {
        var self = this;

        // Stop right here if not using Web Audio.
        if (!self.ctx || !self.ctx.listener) {
            return self;
        }

        // Loop through all Howls and update their stereo panning.
        for (var i = self._howls.length - 1; i >= 0; i--) {
            self._howls[i].stereo(pan);
        }

        return self;
    };

    /**
     * Get/set the position of the listener in 3D cartesian space. Sounds using
     * 3D position will be relative to the listener's position.
     * @param  {Number} x The x-position of the listener.
     * @param  {Number} y The y-position of the listener.
     * @param  {Number} z The z-position of the listener.
     * @return {Howler/Array}   Self or current listener position.
     */
    HowlerGlobal.prototype.pos = function(x, y, z) {
        var self = this;

        // Stop right here if not using Web Audio.
        if (!self.ctx || !self.ctx.listener) {
            return self;
        }

        // Set the defaults for optional 'y' & 'z'.
        y = (typeof y !== 'number') ? self._pos[1] : y;
        z = (typeof z !== 'number') ? self._pos[2] : z;

        if (typeof x === 'number') {
            self._pos = [x, y, z];
            self.ctx.listener.setPosition(self._pos[0], self._pos[1], self._pos[2]);
        } else {
            return self._pos;
        }

        return self;
    };

    /**
     * Get/set the direction the listener is pointing in the 3D cartesian space.
     * A front and up vector must be provided. The front is the direction the
     * face of the listener is pointing, and up is the direction the top of the
     * listener is pointing. Thus, these values are expected to be at right angles
     * from each other.
     * @param  {Number} x   The x-orientation of the listener.
     * @param  {Number} y   The y-orientation of the listener.
     * @param  {Number} z   The z-orientation of the listener.
     * @param  {Number} xUp The x-orientation of the top of the listener.
     * @param  {Number} yUp The y-orientation of the top of the listener.
     * @param  {Number} zUp The z-orientation of the top of the listener.
     * @return {Howler/Array}     Returns self or the current orientation vectors.
     */
    HowlerGlobal.prototype.orientation = function(x, y, z, xUp, yUp, zUp) {
        var self = this;

        // Stop right here if not using Web Audio.
        if (!self.ctx || !self.ctx.listener) {
            return self;
        }

        // Set the defaults for optional 'y' & 'z'.
        var or = self._orientation;
        y = (typeof y !== 'number') ? or[1] : y;
        z = (typeof z !== 'number') ? or[2] : z;
        xUp = (typeof xUp !== 'number') ? or[3] : xUp;
        yUp = (typeof yUp !== 'number') ? or[4] : yUp;
        zUp = (typeof zUp !== 'number') ? or[5] : zUp;

        if (typeof x === 'number') {
            self._orientation = [x, y, z, xUp, yUp, zUp];
            self.ctx.listener.setOrientation(x, y, z, xUp, yUp, zUp);
        } else {
            return or;
        }

        return self;
    };

    /** Group Methods **/
    /***************************************************************************/

    /**
     * Add new properties to the core init.
     * @param  {Function} _super Core init method.
     * @return {Howl}
     */
    Howl.prototype.init = (function(_super) {
        return function(o) {
            var self = this;

            // Setup user-defined default properties.
            self._orientation = o.orientation || [1, 0, 0];
            self._stereo = o.stereo || null;
            self._pos = o.pos || null;
            self._pannerAttr = {
                coneInnerAngle: typeof o.coneInnerAngle !== 'undefined' ? o.coneInnerAngle : 360,
                coneOuterAngle: typeof o.coneOuterAngle !== 'undefined' ? o.coneOuterAngle : 360,
                coneOuterGain: typeof o.coneOuterGain !== 'undefined' ? o.coneOuterGain : 0,
                distanceModel: typeof o.distanceModel !== 'undefined' ? o.distanceModel : 'inverse',
                maxDistance: typeof o.maxDistance !== 'undefined' ? o.maxDistance : 10000,
                panningModel: typeof o.panningModel !== 'undefined' ? o.panningModel : 'HRTF',
                refDistance: typeof o.refDistance !== 'undefined' ? o.refDistance : 1,
                rolloffFactor: typeof o.rolloffFactor !== 'undefined' ? o.rolloffFactor : 1
            };

            // Setup event listeners.
            self._onstereo = o.onstereo ? [{
                fn: o.onstereo
            }] : [];
            self._onpos = o.onpos ? [{
                fn: o.onpos
            }] : [];
            self._onorientation = o.onorientation ? [{
                fn: o.onorientation
            }] : [];

            // Complete initilization with howler.js core's init function.
            return _super.call(this, o);
        };
    })(Howl.prototype.init);

    /**
     * Get/set the stereo panning of the audio source for this sound or all in the group.
     * @param  {Number} pan  A value of -1.0 is all the way left and 1.0 is all the way right.
     * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
     * @return {Howl/Number}    Returns self or the current stereo panning value.
     */
    Howl.prototype.stereo = function(pan, id) {
        var self = this;

        // Stop right here if not using Web Audio.
        if (!self._webAudio) {
            return self;
        }

        // If the sound hasn't loaded, add it to the load queue to change stereo pan when capable.
        if (self._state !== 'loaded') {
            self._queue.push({
                event: 'stereo',
                action: function() {
                    self.stereo(pan, id);
                }
            });

            return self;
        }

        // Check for PannerStereoNode support and fallback to PannerNode if it doesn't exist.
        var pannerType = (typeof Howler.ctx.createStereoPanner === 'undefined') ? 'spatial' : 'stereo';

        // Setup the group's stereo panning if no ID is passed.
        if (typeof id === 'undefined') {
            // Return the group's stereo panning if no parameters are passed.
            if (typeof pan === 'number') {
                self._stereo = pan;
                self._pos = [pan, 0, 0];
            } else {
                return self._stereo;
            }
        }

        // Change the streo panning of one or all sounds in group.
        var ids = self._getSoundIds(id);
        for (var i = 0; i < ids.length; i++) {
            // Get the sound.
            var sound = self._soundById(ids[i]);

            if (sound) {
                if (typeof pan === 'number') {
                    sound._stereo = pan;
                    sound._pos = [pan, 0, 0];

                    if (sound._node) {
                        // If we are falling back, make sure the panningModel is equalpower.
                        sound._pannerAttr.panningModel = 'equalpower';

                        // Check if there is a panner setup and create a new one if not.
                        if (!sound._panner || !sound._panner.pan) {
                            setupPanner(sound, pannerType);
                        }

                        if (pannerType === 'spatial') {
                            sound._panner.setPosition(pan, 0, 0);
                        } else {
                            sound._panner.pan.value = pan;
                        }
                    }

                    self._emit('stereo', sound._id);
                } else {
                    return sound._stereo;
                }
            }
        }

        return self;
    };

    /**
     * Get/set the 3D spatial position of the audio source for this sound or
     * all in the group. The most common usage is to set the 'x' position for
     * left/right panning. Setting any value higher than 1.0 will begin to
     * decrease the volume of the sound as it moves further away.
     * @param  {Number} x  The x-position of the audio from -1000.0 to 1000.0.
     * @param  {Number} y  The y-position of the audio from -1000.0 to 1000.0.
     * @param  {Number} z  The z-position of the audio from -1000.0 to 1000.0.
     * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
     * @return {Howl/Array}    Returns self or the current 3D spatial position: [x, y, z].
     */
    Howl.prototype.pos = function(x, y, z, id) {
        var self = this;

        // Stop right here if not using Web Audio.
        if (!self._webAudio) {
            return self;
        }

        // If the sound hasn't loaded, add it to the load queue to change position when capable.
        if (self._state !== 'loaded') {
            self._queue.push({
                event: 'pos',
                action: function() {
                    self.pos(x, y, z, id);
                }
            });

            return self;
        }

        // Set the defaults for optional 'y' & 'z'.
        y = (typeof y !== 'number') ? 0 : y;
        z = (typeof z !== 'number') ? -0.5 : z;

        // Setup the group's spatial position if no ID is passed.
        if (typeof id === 'undefined') {
            // Return the group's spatial position if no parameters are passed.
            if (typeof x === 'number') {
                self._pos = [x, y, z];
            } else {
                return self._pos;
            }
        }

        // Change the spatial position of one or all sounds in group.
        var ids = self._getSoundIds(id);
        for (var i = 0; i < ids.length; i++) {
            // Get the sound.
            var sound = self._soundById(ids[i]);

            if (sound) {
                if (typeof x === 'number') {
                    sound._pos = [x, y, z];

                    if (sound._node) {
                        // Check if there is a panner setup and create a new one if not.
                        if (!sound._panner || sound._panner.pan) {
                            setupPanner(sound, 'spatial');
                        }

                        sound._panner.setPosition(x, y, z);
                    }

                    self._emit('pos', sound._id);
                } else {
                    return sound._pos;
                }
            }
        }

        return self;
    };

    /**
     * Get/set the direction the audio source is pointing in the 3D cartesian coordinate
     * space. Depending on how direction the sound is, based on the `cone` attributes,
     * a sound pointing away from the listener can be quiet or silent.
     * @param  {Number} x  The x-orientation of the source.
     * @param  {Number} y  The y-orientation of the source.
     * @param  {Number} z  The z-orientation of the source.
     * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
     * @return {Howl/Array}    Returns self or the current 3D spatial orientation: [x, y, z].
     */
    Howl.prototype.orientation = function(x, y, z, id) {
        var self = this;

        // Stop right here if not using Web Audio.
        if (!self._webAudio) {
            return self;
        }

        // If the sound hasn't loaded, add it to the load queue to change orientation when capable.
        if (self._state !== 'loaded') {
            self._queue.push({
                event: 'orientation',
                action: function() {
                    self.orientation(x, y, z, id);
                }
            });

            return self;
        }

        // Set the defaults for optional 'y' & 'z'.
        y = (typeof y !== 'number') ? self._orientation[1] : y;
        z = (typeof z !== 'number') ? self._orientation[2] : z;

        // Setup the group's spatial orientation if no ID is passed.
        if (typeof id === 'undefined') {
            // Return the group's spatial orientation if no parameters are passed.
            if (typeof x === 'number') {
                self._orientation = [x, y, z];
            } else {
                return self._orientation;
            }
        }

        // Change the spatial orientation of one or all sounds in group.
        var ids = self._getSoundIds(id);
        for (var i = 0; i < ids.length; i++) {
            // Get the sound.
            var sound = self._soundById(ids[i]);

            if (sound) {
                if (typeof x === 'number') {
                    sound._orientation = [x, y, z];

                    if (sound._node) {
                        // Check if there is a panner setup and create a new one if not.
                        if (!sound._panner) {
                            // Make sure we have a position to setup the node with.
                            if (!sound._pos) {
                                sound._pos = self._pos || [0, 0, -0.5];
                            }

                            setupPanner(sound, 'spatial');
                        }

                        sound._panner.setOrientation(x, y, z);
                    }

                    self._emit('orientation', sound._id);
                } else {
                    return sound._orientation;
                }
            }
        }

        return self;
    };

    /**
     * Get/set the panner node's attributes for a sound or group of sounds.
     * This method can optionall take 0, 1 or 2 arguments.
     *   pannerAttr() -> Returns the group's values.
     *   pannerAttr(id) -> Returns the sound id's values.
     *   pannerAttr(o) -> Set's the values of all sounds in this Howl group.
     *   pannerAttr(o, id) -> Set's the values of passed sound id.
     *
     *   Attributes:
     *     coneInnerAngle - (360 by default) There will be no volume reduction inside this angle.
     *     coneOuterAngle - (360 by default) The volume will be reduced to a constant value of
     *                      `coneOuterGain` outside this angle.
     *     coneOuterGain - (0 by default) The amount of volume reduction outside of `coneOuterAngle`.
     *     distanceModel - ('inverse' by default) Determines algorithm to use to reduce volume as audio moves
     *                      away from listener. Can be `linear`, `inverse` or `exponential`.
     *     maxDistance - (10000 by default) Volume won't reduce between source/listener beyond this distance.
     *     panningModel - ('HRTF' by default) Determines which spatialization algorithm is used to position audio.
     *                     Can be `HRTF` or `equalpower`.
     *     refDistance - (1 by default) A reference distance for reducing volume as the source
     *                    moves away from the listener.
     *     rolloffFactor - (1 by default) How quickly the volume reduces as source moves from listener.
     * 
     * @return {Howl/Object} Returns self or current panner attributes.
     */
    Howl.prototype.pannerAttr = function() {
        var self = this;
        var args = arguments;
        var o, id, sound;

        // Stop right here if not using Web Audio.
        if (!self._webAudio) {
            return self;
        }

        // Determine the values based on arguments.
        if (args.length === 0) {
            // Return the group's panner attribute values.
            return self._pannerAttr;
        } else if (args.length === 1) {
            if (typeof args[0] === 'object') {
                o = args[0];

                // Set the grou's panner attribute values.
                if (typeof id === 'undefined') {
                    self._pannerAttr = {
                        coneInnerAngle: typeof o.coneInnerAngle !== 'undefined' ? o.coneInnerAngle : self._coneInnerAngle,
                        coneOuterAngle: typeof o.coneOuterAngle !== 'undefined' ? o.coneOuterAngle : self._coneOuterAngle,
                        coneOuterGain: typeof o.coneOuterGain !== 'undefined' ? o.coneOuterGain : self._coneOuterGain,
                        distanceModel: typeof o.distanceModel !== 'undefined' ? o.distanceModel : self._distanceModel,
                        maxDistance: typeof o.maxDistance !== 'undefined' ? o.maxDistance : self._maxDistance,
                        panningModel: typeof o.panningModel !== 'undefined' ? o.panningModel : self._panningModel,
                        refDistance: typeof o.refDistance !== 'undefined' ? o.refDistance : self._refDistance,
                        rolloffFactor: typeof o.rolloffFactor !== 'undefined' ? o.rolloffFactor : self._rolloffFactor
                    };
                }
            } else {
                // Return this sound's panner attribute values.
                sound = self._soundById(parseInt(args[0], 10));
                return sound ? sound._pannerAttr : self._pannerAttr;
            }
        } else if (args.length === 2) {
            o = args[0];
            id = parseInt(args[1], 10);
        }

        // Update the values of the specified sounds.
        var ids = self._getSoundIds(id);
        for (var i = 0; i < ids.length; i++) {
            sound = self._soundById(ids[i]);

            if (sound) {
                // Merge the new values into the sound.
                var pa = sound._pannerAttr;
                pa = {
                    coneInnerAngle: typeof o.coneInnerAngle !== 'undefined' ? o.coneInnerAngle : pa.coneInnerAngle,
                    coneOuterAngle: typeof o.coneOuterAngle !== 'undefined' ? o.coneOuterAngle : pa.coneOuterAngle,
                    coneOuterGain: typeof o.coneOuterGain !== 'undefined' ? o.coneOuterGain : pa.coneOuterGain,
                    distanceModel: typeof o.distanceModel !== 'undefined' ? o.distanceModel : pa.distanceModel,
                    maxDistance: typeof o.maxDistance !== 'undefined' ? o.maxDistance : pa.maxDistance,
                    panningModel: typeof o.panningModel !== 'undefined' ? o.panningModel : pa.panningModel,
                    refDistance: typeof o.refDistance !== 'undefined' ? o.refDistance : pa.refDistance,
                    rolloffFactor: typeof o.rolloffFactor !== 'undefined' ? o.rolloffFactor : pa.rolloffFactor
                };

                // Update the panner values or create a new panner if none exists.
                var panner = sound._panner;
                if (panner) {
                    panner.coneInnerAngle = pa.coneInnerAngle;
                    panner.coneOuterAngle = pa.coneOuterAngle;
                    panner.coneOuterGain = pa.coneOuterGain;
                    panner.distanceModel = pa.distanceModel;
                    panner.maxDistance = pa.maxDistance;
                    panner.panningModel = pa.panningModel;
                    panner.refDistance = pa.refDistance;
                    panner.rolloffFactor = pa.rolloffFactor;
                } else {
                    // Make sure we have a position to setup the node with.
                    if (!sound._pos) {
                        sound._pos = self._pos || [0, 0, -0.5];
                    }

                    // Create a new panner node.
                    setupPanner(sound, 'spatial');
                }
            }
        }

        return self;
    };

    /** Single Sound Methods **/
    /***************************************************************************/

    /**
     * Add new properties to the core Sound init.
     * @param  {Function} _super Core Sound init method.
     * @return {Sound}
     */
    Sound.prototype.init = (function(_super) {
        return function() {
            var self = this;
            var parent = self._parent;

            // Setup user-defined default properties.
            self._orientation = parent._orientation;
            self._stereo = parent._stereo;
            self._pos = parent._pos;
            self._pannerAttr = parent._pannerAttr;

            // Complete initilization with howler.js core Sound's init function.
            _super.call(this);

            // If a stereo or position was specified, set it up.
            if (self._stereo) {
                parent.stereo(self._stereo);
            } else if (self._pos) {
                parent.pos(self._pos[0], self._pos[1], self._pos[2], self._id);
            }
        };
    })(Sound.prototype.init);

    /**
     * Override the Sound.reset method to clean up properties from the spatial plugin.
     * @param  {Function} _super Sound reset method.
     * @return {Sound}
     */
    Sound.prototype.reset = (function(_super) {
        return function() {
            var self = this;
            var parent = self._parent;

            // Reset all spatial plugin properties on this sound.
            self._orientation = parent._orientation;
            self._pos = parent._pos;
            self._pannerAttr = parent._pannerAttr;

            // Complete resetting of the sound.
            return _super.call(this);
        };
    })(Sound.prototype.reset);

    /** Helper Methods **/
    /***************************************************************************/

    /**
     * Create a new panner node and save it on the sound.
     * @param  {Sound} sound Specific sound to setup panning on.
     * @param {String} type Type of panner to create: 'stereo' or 'spatial'.
     */
    var setupPanner = function(sound, type) {
        type = type || 'spatial';

        // Create the new panner node.
        if (type === 'spatial') {
            sound._panner = Howler.ctx.createPanner();
            sound._panner.coneInnerAngle = sound._pannerAttr.coneInnerAngle;
            sound._panner.coneOuterAngle = sound._pannerAttr.coneOuterAngle;
            sound._panner.coneOuterGain = sound._pannerAttr.coneOuterGain;
            sound._panner.distanceModel = sound._pannerAttr.distanceModel;
            sound._panner.maxDistance = sound._pannerAttr.maxDistance;
            sound._panner.panningModel = sound._pannerAttr.panningModel;
            sound._panner.refDistance = sound._pannerAttr.refDistance;
            sound._panner.rolloffFactor = sound._pannerAttr.rolloffFactor;
            sound._panner.setPosition(sound._pos[0], sound._pos[1], sound._pos[2]);
            sound._panner.setOrientation(sound._orientation[0], sound._orientation[1], sound._orientation[2]);
        } else {
            sound._panner = Howler.ctx.createStereoPanner();
            sound._panner.pan.value = sound._stereo;
        }

        sound._panner.connect(sound._node);

        // Update the connections.
        if (!sound._paused) {
            sound._parent.pause(sound._id, true).play(sound._id);
        }
    };
})();

/* FileSaver.js
 * A saveAs() FileSaver implementation.
 * 2015-05-07.2
 *
 * By Eli Grey, http://eligrey.com
 * License: X11/MIT
 *   See https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md
 */

/*global self */
/*jslint bitwise: true, indent: 4, laxbreak: true, laxcomma: true, smarttabs: true, plusplus: true */

/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */

var saveAs = saveAs || (function(view) {
    "use strict";
    // IE <10 is explicitly unsupported
    if (typeof navigator !== "undefined" && /MSIE [1-9]\./.test(navigator.userAgent)) {
        return;
    }
    var
        doc = view.document
        // only get URL when necessary in case Blob.js hasn't overridden it yet
        ,
        get_URL = function() {
            return view.URL || view.webkitURL || view;
        },
        save_link = doc.createElementNS("http://www.w3.org/1999/xhtml", "a"),
        can_use_save_link = "download" in save_link,
        click = function(node) {
            var event = doc.createEvent("MouseEvents");
            event.initMouseEvent(
                "click", true, false, view, 0, 0, 0, 0, 0, false, false, false, false, 0, null
            );
            node.dispatchEvent(event);
        },
        webkit_req_fs = view.webkitRequestFileSystem,
        req_fs = view.requestFileSystem || webkit_req_fs || view.mozRequestFileSystem,
        throw_outside = function(ex) {
            (view.setImmediate || view.setTimeout)(function() {
                throw ex;
            }, 0);
        },
        force_saveable_type = "application/octet-stream",
        fs_min_size = 0
        // See https://code.google.com/p/chromium/issues/detail?id=375297#c7 and
        // https://github.com/eligrey/FileSaver.js/commit/485930a#commitcomment-8768047
        // for the reasoning behind the timeout and revocation flow
        ,
        arbitrary_revoke_timeout = 500 // in ms
        ,
        revoke = function(file) {
            var revoker = function() {
                if (typeof file === "string") { // file is an object URL
                    get_URL().revokeObjectURL(file);
                } else { // file is a File
                    file.remove();
                }
            };
            if (view.chrome) {
                revoker();
            } else {
                setTimeout(revoker, arbitrary_revoke_timeout);
            }
        },
        dispatch = function(filesaver, event_types, event) {
            event_types = [].concat(event_types);
            var i = event_types.length;
            while (i--) {
                var listener = filesaver["on" + event_types[i]];
                if (typeof listener === "function") {
                    try {
                        listener.call(filesaver, event || filesaver);
                    } catch (ex) {
                        throw_outside(ex);
                    }
                }
            }
        },
        auto_bom = function(blob) {
            // prepend BOM for UTF-8 XML and text/* types (including HTML)
            if (/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
                return new Blob(["\ufeff", blob], {
                    type: blob.type
                });
            }
            return blob;
        },
        FileSaver = function(blob, name) {
            blob = auto_bom(blob);
            // First try a.download, then web filesystem, then object URLs
            var
                filesaver = this,
                type = blob.type,
                blob_changed = false,
                object_url, target_view, dispatch_all = function() {
                    dispatch(filesaver, "writestart progress write writeend".split(" "));
                }
                // on any filesys errors revert to saving with object URLs
                ,
                fs_error = function() {
                    // don't create more object URLs than needed
                    if (blob_changed || !object_url) {
                        object_url = get_URL().createObjectURL(blob);
                    }
                    if (target_view) {
                        target_view.location.href = object_url;
                    } else {
                        var new_tab = view.open(object_url, "_blank");
                        if (new_tab == undefined && typeof safari !== "undefined") {
                            //Apple do not allow window.open, see http://bit.ly/1kZffRI
                            view.location.href = object_url
                        }
                    }
                    filesaver.readyState = filesaver.DONE;
                    dispatch_all();
                    revoke(object_url);
                },
                abortable = function(func) {
                    return function() {
                        if (filesaver.readyState !== filesaver.DONE) {
                            return func.apply(this, arguments);
                        }
                    };
                },
                create_if_not_found = {
                    create: true,
                    exclusive: false
                },
                slice;
            filesaver.readyState = filesaver.INIT;
            if (!name) {
                name = "download";
            }
            if (can_use_save_link) {
                object_url = get_URL().createObjectURL(blob);
                save_link.href = object_url;
                save_link.download = name;
                click(save_link);
                filesaver.readyState = filesaver.DONE;
                dispatch_all();
                revoke(object_url);
                return;
            }
            // Object and web filesystem URLs have a problem saving in Google Chrome when
            // viewed in a tab, so I force save with application/octet-stream
            // http://code.google.com/p/chromium/issues/detail?id=91158
            // Update: Google errantly closed 91158, I submitted it again:
            // https://code.google.com/p/chromium/issues/detail?id=389642
            if (view.chrome && type && type !== force_saveable_type) {
                slice = blob.slice || blob.webkitSlice;
                blob = slice.call(blob, 0, blob.size, force_saveable_type);
                blob_changed = true;
            }
            // Since I can't be sure that the guessed media type will trigger a download
            // in WebKit, I append .download to the filename.
            // https://bugs.webkit.org/show_bug.cgi?id=65440
            if (webkit_req_fs && name !== "download") {
                name += ".download";
            }
            if (type === force_saveable_type || webkit_req_fs) {
                target_view = view;
            }
            if (!req_fs) {
                fs_error();
                return;
            }
            fs_min_size += blob.size;
            req_fs(view.TEMPORARY, fs_min_size, abortable(function(fs) {
                fs.root.getDirectory("saved", create_if_not_found, abortable(function(dir) {
                    var save = function() {
                        dir.getFile(name, create_if_not_found, abortable(function(file) {
                            file.createWriter(abortable(function(writer) {
                                writer.onwriteend = function(event) {
                                    target_view.location.href = file.toURL();
                                    filesaver.readyState = filesaver.DONE;
                                    dispatch(filesaver, "writeend", event);
                                    revoke(file);
                                };
                                writer.onerror = function() {
                                    var error = writer.error;
                                    if (error.code !== error.ABORT_ERR) {
                                        fs_error();
                                    }
                                };
                                "writestart progress write abort".split(" ").forEach(function(event) {
                                    writer["on" + event] = filesaver["on" + event];
                                });
                                writer.write(blob);
                                filesaver.abort = function() {
                                    writer.abort();
                                    filesaver.readyState = filesaver.DONE;
                                };
                                filesaver.readyState = filesaver.WRITING;
                            }), fs_error);
                        }), fs_error);
                    };
                    dir.getFile(name, {
                        create: false
                    }, abortable(function(file) {
                        // delete file if it already exists
                        file.remove();
                        save();
                    }), abortable(function(ex) {
                        if (ex.code === ex.NOT_FOUND_ERR) {
                            save();
                        } else {
                            fs_error();
                        }
                    }));
                }), fs_error);
            }), fs_error);
        },
        FS_proto = FileSaver.prototype,
        saveAs = function(blob, name) {
            return new FileSaver(blob, name);
        };
    // IE 10+ (native saveAs)
    if (typeof navigator !== "undefined" && navigator.msSaveOrOpenBlob) {
        return function(blob, name) {
            return navigator.msSaveOrOpenBlob(auto_bom(blob), name);
        };
    }

    FS_proto.abort = function() {
        var filesaver = this;
        filesaver.readyState = filesaver.DONE;
        dispatch(filesaver, "abort");
    };
    FS_proto.readyState = FS_proto.INIT = 0;
    FS_proto.WRITING = 1;
    FS_proto.DONE = 2;

    FS_proto.error =
        FS_proto.onwritestart =
        FS_proto.onprogress =
        FS_proto.onwrite =
        FS_proto.onabort =
        FS_proto.onerror =
        FS_proto.onwriteend =
        null;

    return saveAs;
}(
    typeof self !== "undefined" && self ||
    typeof window !== "undefined" && window ||
    this.content
));
// `self` is undefined in Firefox for Android content script context
// while `this` is nsIContentFrameMessageManager
// with an attribute `content` that corresponds to the window

if (typeof module !== "undefined" && module.exports) {
    module.exports.saveAs = saveAs;
} else if ((typeof define !== "undefined" && define !== null) && (define.amd != null)) {
    define([], function() {
        return saveAs;
    });
}
/*!
 * EventEmitter v4.2.7 - git.io/ee
 * Oliver Caldwell
 * MIT license
 * @preserve
 */
(function() {
    "use strict";

    function a() {}

    function b(a, b) {
        for (var c = a.length; c--;)
            if (a[c].listener === b) return c;
        return -1
    }

    function c(a) {
        return function() {
            return this[a].apply(this, arguments)
        }
    }
    var d = a.prototype,
        e = this,
        f = e.EventEmitter;
    d.getListeners = function(a) {
        var b, c, d = this._getEvents();
        if (a instanceof RegExp) {
            b = {};
            for (c in d) d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c])
        } else b = d[a] || (d[a] = []);
        return b
    }, d.flattenListeners = function(a) {
        var b, c = [];
        for (b = 0; b < a.length; b += 1) c.push(a[b].listener);
        return c
    }, d.getListenersAsObject = function(a) {
        var b, c = this.getListeners(a);
        return c instanceof Array && (b = {}, b[a] = c), b || c
    }, d.addListener = function(a, c) {
        var d, e = this.getListenersAsObject(a),
            f = "object" == typeof c;
        for (d in e) e.hasOwnProperty(d) && -1 === b(e[d], c) && e[d].push(f ? c : {
            listener: c,
            once: !1
        });
        return this
    }, d.on = c("addListener"), d.addOnceListener = function(a, b) {
        return this.addListener(a, {
            listener: b,
            once: !0
        })
    }, d.once = c("addOnceListener"), d.defineEvent = function(a) {
        return this.getListeners(a), this
    }, d.defineEvents = function(a) {
        for (var b = 0; b < a.length; b += 1) this.defineEvent(a[b]);
        return this
    }, d.removeListener = function(a, c) {
        var d, e, f = this.getListenersAsObject(a);
        for (e in f) f.hasOwnProperty(e) && (d = b(f[e], c), -1 !== d && f[e].splice(d, 1));
        return this
    }, d.off = c("removeListener"), d.addListeners = function(a, b) {
        return this.manipulateListeners(!1, a, b)
    }, d.removeListeners = function(a, b) {
        return this.manipulateListeners(!0, a, b)
    }, d.manipulateListeners = function(a, b, c) {
        var d, e, f = a ? this.removeListener : this.addListener,
            g = a ? this.removeListeners : this.addListeners;
        if ("object" != typeof b || b instanceof RegExp)
            for (d = c.length; d--;) f.call(this, b, c[d]);
        else
            for (d in b) b.hasOwnProperty(d) && (e = b[d]) && ("function" == typeof e ? f.call(this, d, e) : g.call(this, d, e));
        return this
    }, d.removeEvent = function(a) {
        var b, c = typeof a,
            d = this._getEvents();
        if ("string" === c) delete d[a];
        else if (a instanceof RegExp)
            for (b in d) d.hasOwnProperty(b) && a.test(b) && delete d[b];
        else delete this._events;
        return this
    }, d.removeAllListeners = c("removeEvent"), d.emitEvent = function(a, b) {
        var c, d, e, f, g = this.getListenersAsObject(a);
        for (e in g)
            if (g.hasOwnProperty(e))
                for (d = g[e].length; d--;) c = g[e][d], c.once === !0 && this.removeListener(a, c.listener), f = c.listener.apply(this, b || []), f === this._getOnceReturnValue() && this.removeListener(a, c.listener);
        return this
    }, d.trigger = c("emitEvent"), d.emit = function(a) {
        var b = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(a, b)
    }, d.setOnceReturnValue = function(a) {
        return this._onceReturnValue = a, this
    }, d._getOnceReturnValue = function() {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }, d._getEvents = function() {
        return this._events || (this._events = {})
    }, a.noConflict = function() {
        return e.EventEmitter = f, a
    }, "function" == typeof define && define.amd ? define(function() {
        return a
    }) : "object" == typeof module && module.exports ? module.exports = a : this.EventEmitter = a
}).call(this),
    function() {
        var a = function(b) {
            this.gameId = b || "test", this.scoresToPull = null, this.toggoApi = null, this.toggoTracking = null;
            try {
                "undefined" != typeof window.parent.Highscore && (this.toggoApi = new window.parent.Highscore, this.toggoApi.addEventListener(window.parent.Event.ERROR, function(b) {
                    if ("string" == typeof b.object)
                        for (var c = b.object.split("&"), d = 0; d < c.length; d++)
                            if ("" != c[d]) {
                                var e = c[d].split("=");
                                if ("written" == e[0] && 0 == e[1]) return void this.emitEvent(a.event.ERROR_BADWORD)
                            }
                    console.log("Error in Toggo highscore API", b)
                }.bind(this)), this.toggoApi.addEventListener(window.parent.Event.ADDED, function() {
                    this.emitEvent(a.event.ADDED)
                }.bind(this)), this.toggoApi.addEventListener(window.parent.Event.LOADED, function(b) {
                    this.emitEvent(a.event.LOADED, [this._parseResult(b.object)])
                }.bind(this)))
            } catch (c) {}
            this.toggoTracking = null;
            try {
                "undefined" != typeof window.parent.AssistToggo && (this.toggoTracking = window.parent.AssistToggo)
            } catch (c) {}
        };
        a.prototype = EventEmitter.prototype, a.sortOrder = {
            ASC: "asc",
            DESC: "desc"
        }, a.event = {
            ADDED: "added",
            LOADED: "loaded",
            ERROR_BADWORD: "error_badword"
        }, a._fieldTranslationFsToEoa = {
            position: "platz",
            score: "punkte",
            nickName: "nickname"
        }, a._fieldTranslationEoaToFs = {
            platz: "position",
            punkte: "score",
            nickname: "nickName"
        }, a.prototype.track = function(a) {
            this.toggoTracking ? this.toggoTracking.sendIVWTag(a, window.location) : console.log("toggoTracking", a)
        }, a.prototype.pushScore = function(b, c) {
            this.toggoApi ? this.toggoApi.addHighscoreTableData(this.gameId, b, c) : (console.log("highscorePush", this.gameId, b, c), this.emitEvent(a.event.ADDED))
        }, a.prototype.pullScores = function(b, c) {
            if (b = b || 10, c = c || a.sortOrder.DESC, this.scoresToPull = b, this.toggoApi) {
                var d = c == a.sortOrder.ASC ? window.parent.Highscore.ASCENDING : window.parent.Highscore.DECENDING;
                this.toggoApi.getHighscoreTableData(this.gameId, b, d)
            } else console.log("highscorePull", this.gameId, b, c), this.emitEvent(a.event.LOADED, [this._parseResult([])])
        }, a.prototype._parseResult = function(b) {
            var c = [];
            for (var d in b) {
                var e = d.split("_"),
                    f = e[0],
                    g = e[1] - 1,
                    h = b[d];
                f == a._fieldTranslationFsToEoa.position && (h = h.replace(".", "")), g in c || (c[g] = {}), c[g][a._fieldTranslationEoaToFs[f]] = h
            }
            if (c.sort(function(a, b) {
                    return a.position - b.position
                }), this.scoresToPull && c.length < this.scoresToPull) {
                var i = c.length > 0 ? c[c.length - 1].position : 0;
                do i++, c.push({
                    position: i,
                    score: 0,
                    nickName: "Player"
                }); while (c.length < this.scoresToPull)
            }
            return c
        }, "FSToggoApi" in this || (this.FSToggoApi = a)
    }.call(this);